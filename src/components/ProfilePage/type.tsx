type result = {
	Id: number;
	Nome: string;
	Email: string;
	Username: string;
	Canal: string;
	UrlAvatar: string;
	YouTube: string;
	Discord: string;
	Linkedin: string;
	Instagram: string;
	Github: string;
	Twitter: string;
	Tipo: string;
	XP: number;
	patenteId: number;
};

export type userProps = {
	result: result;
};

export type ProfileFormProps = {
	userName: string;
	tagName: string;
	youtube?: string;
	discord?: string;
	linkedin?: string;
	instagram?: string;
	github?: string;
	twitter?: string;
	about: string;
};
