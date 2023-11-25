import { ChangeEvent, FormEvent } from 'react';
import { ResponseType } from '~/Models/interfaces';

export type FormResourceProps<Resource = any | { [s: string]: any }> = {
	Resource: Resource;
	changeResource?: (key: string, value: any) => void;
};
export type FormControlType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type FormProps<
	Resource = any | { [s: string]: any },
	SubmitResponse = ResponseType
> = FormResourceProps<Resource> & {
	changeResourceStr?: (e: ChangeEvent<FormControlType>) => void;
	changeResourceNum?: (e: ChangeEvent<FormControlType>) => void;
	changeResourceBool?: (e: ChangeEvent<FormControlType>) => void;
	changeResourceCheck?: (e: ChangeEvent<HTMLInputElement>) => void;
	ButtonDisabled?: boolean;
	setButtonDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
	onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<ResponseType<Resource> | SubmitResponse>;
	success?: (payloads: Resource) => void;
};
