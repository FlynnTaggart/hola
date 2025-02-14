import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "¡Hola!",
		invitation: "Alena, ¿saldrás conmigo esta noche? 👉👈🥺",
		yesText: "Sí",
		noText: "No",
		topImage: `${assets}/Assets/Other/capibara.webp`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		otherPic: `${assets}/Assets/Other/greg.gif`,
		pepe: `${assets}/Assets/Other/pepe.gif`,
	},
	noPage: {
		message: 'Ahah, adesso non è più spagnolo! "No" non è qualcosa che è disponibile 🤠🤌🤌',
		image: `${assets}/Assets/No_picture/ripley.gif`,
		kitty: `${assets}/Assets/No_picture/kitty.webp`,
		tom: `${assets}/Assets/No_picture/tom.webp`
	},
	yesPage: {
		message: "Yaaaaay 💗💖🥰💅",
		image: `${assets}/Assets/Yes_picture/love.webp`,
		happy: `${assets}/Assets/Yes_picture/happy.webp`,
		walk: `${assets}/Assets/Yes_picture/walk.webp`,
		happy_cat: `${assets}/Assets/Yes_picture/happy_cat.gif`,
		kiss: `${assets}/Assets/Yes_picture/kiss.gif`
	},
};
