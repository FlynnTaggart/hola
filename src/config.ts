import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Привет!",
		invitation: "Ты идешь со мной на свидание на этой неделе? 👉👈🥺",
		yesText: "Да",
		noText: "Нет",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"Нет" на самом деле не вариант😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "Увидимся на этой неделе 😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
