import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace com.kh.martina.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		let oShopModel = new JSONModel();
		oShopModel.setData({
			"onlineshops": [
				{
					"name": "Hyla",
					"logo_url": "./src/Hyla_Germany_logo.svg",
					"shop_url": "https://martina-hoelzlwimmer.hyla-germany.de/"
				},
				{
					"name": "Forever",
					"logo_url": "./src/forever_living_products_logo.png",
					"shop_url": "https://490000579367.fbo.foreverliving.com"
				},
				{
					"name": "Thermomix",
					"logo_url": "./src/thermomix.webp",
					"shop_url": "https://www.vorwerk.com/de/de/c/home/produkt-vorfuehrung/thermomix-kundenberatung/thermomix.html/martina.hoelzlwimmer"
				},
				{
					"name": "Pampered Chef",
					"logo_url": "./src/pampered_chef_logo.png",
					"shop_url": "https://pamperedchef.eu/MartinaHoelzlwimmer"
				},
			],
			"socialmedia": [
				{
					"name": "Instagram",
					"logo_url": "./src/instagram_logo_primary.svg",
					"socialmedia_url": "https://www.instagram.com/martina_hoelzlwimmer/"
				},
				{
					"name": "Facebook",
					"logo_url": "./src/facebook_logo_primary.png",
					"socialmedia_url": "https://www.facebook.com/ina.holzlwimmer"
				}
			]
		});
		this.getView().setModel(oShopModel, "martina");
	}
}
