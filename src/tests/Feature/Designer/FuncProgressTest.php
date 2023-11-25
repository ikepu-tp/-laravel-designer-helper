<?php

namespace Tests\Feature\Designer;

use ikepu_tp\DesignerHelper\app\Models\Func_progress;
use ikepu_tp\DesignerHelper\app\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FuncProgressTest extends TestCase
{
    use RefreshDatabase;
    use Funcs;

    public $routeName = "function.progress";
    public $modelName = "func_progress";
    public $resource = [
        "id",
        "name",
        "note"
    ];
    public $data = [
        "name" => "name",
        "note" => "note",
    ];

    public function setUp(): void
    {
        parent::setUp();
        $this->setHeaders();
    }

    public function getParameters(bool $item = false, array $parameters = []): array
    {
        $parameters["project"] = Project::factory()->create();
        if ($item) $parameters[$this->modelName] = Func_progress::factory()->create(["project_id" => $parameters["project"]->id]);
        return $parameters;
    }

    public function test_get_table_outlines()
    {
        $response = $this->get(route("{$this->routeName}.index", $this->getParameters()));
        $response->assertStatus(200);
        $response->assertJsonStructure($this->getIndexResource());
    }

    public function test_get_table_outline()
    {
        $response = $this->get(route("{$this->routeName}.show", $this->getParameters(true)));
        $response->assertStatus(200);
        $response->assertJsonStructure($this->getSuccessResource());
    }

    public function test_store_table_outline()
    {
        $response = $this->post(route("{$this->routeName}.store", $this->getParameters()), $this->data);
        $response->assertStatus(201);
        $response->assertJsonStructure($this->getSuccessResource());
    }

    public function test_update_table_outline()
    {
        $parameters = $this->getParameters(true);
        $response = $this->put(route("{$this->routeName}.update", $parameters), $this->data);
        $response->assertStatus(200);
        $response->assertJsonStructure($this->getSuccessResource());
        $this->assertEquals($this->data["name"], $parameters[$this->modelName]->fresh()->name);
    }

    public function test_delete_table_outline()
    {
        $parameters = $this->getParameters(true);
        $response = $this->delete(route("{$this->routeName}.destroy", $parameters));
        $response->assertStatus(204);
        $this->assertNotNull($parameters[$this->modelName]->fresh()->deleted_at);
    }
}