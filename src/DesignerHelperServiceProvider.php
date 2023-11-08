<?php

namespace ikepu_tp\DesignerHelper;

use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Blade;

class DesignerHelperServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/config/laravel-designer-helper.php', 'laravel-designer-helper');
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->registerPublishing();
        $this->defineRoutes();
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->loadViewsFrom(__DIR__ . "/resources/views", "DesignerHelper");
        Paginator::useBootstrap();
        Blade::componentNamespace("ikepu_tp\\resources\\views\\components", "DesignerHelper");
    }

    /**
     * Register the package's publishable resources.
     */
    private function registerPublishing()
    {
        if (!$this->app->runningInConsole()) return;

        $this->publishes([
            __DIR__ . '/config/laravel-designer-helper.php' => base_path('config/laravel-designer-helper.php'),
        ], 'DesignerHelper-config');


        $this->publishMigration();
        $this->publishView();
        $this->publishAsset();
    }

    private function publishMigration(): void
    {
        $migrations = [];
        foreach ($migrations as $migration) {
            $this->publishes([
                __DIR__ . "/database/migrations/{$migration}" => database_path(
                    "migrations/{$migration}"
                ),
            ], 'migrations');
        }
    }

    private function publishView(): void
    {
        $this->publishes([
            __DIR__ . '/resources/views' => resource_path('views/vendor/DesignerHelper'),
        ], 'DesignerHelper-views');
    }

    private function publishAsset(): void
    {
        $this->publishes([], 'DesignerHelper-assets');
    }

    /**
     * Define the routes.
     *
     * @return void
     */
    protected function defineRoutes()
    {
        $this->loadRoutesFrom(__DIR__ . "/routes/web.php");
    }
}