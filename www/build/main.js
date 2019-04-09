webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdonancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrdonancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdonancePage = /** @class */ (function () {
    function OrdonancePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = this.navParams.data;
    }
    OrdonancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdonancePage');
    };
    OrdonancePage.prototype.dismiss = function () {
        var data = null;
        this.viewCtrl.dismiss(data);
    };
    OrdonancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ordonance',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/ordonance/ordonance.html"*/'<!--\n  Generated template for the OrdonancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding style="background: #000; padding-top: 128px">\n  <div padding="" text-center="">\n    <ion-fab>\n      <button ion-fab (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n  <img src="data:image/jpeg;base64,{{item.image}}" style="width: 100%">\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/ordonance/ordonance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], OrdonancePage);
    return OrdonancePage;
}());

//# sourceMappingURL=ordonance.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PharmacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PharmacyPage = /** @class */ (function () {
    function PharmacyPage(navCtrl, navParams, viewCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.pharmacy = {};
        this.pharmacy = this.navParams.data;
        //console.log(this.pharmacy);
    }
    PharmacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PharmacyPage');
    };
    PharmacyPage.prototype.dismiss = function () {
        this.pharmacy = null;
        this.viewCtrl.dismiss();
    };
    PharmacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pharmacy',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/pharmacy/pharmacy.html"*/'<!--\n  Generated template for the PharmacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>&nbsp;</h1>\n  <div text-center="">\n    <h1>\n      <ion-icon name="home" style="font-size: 56px"></ion-icon>\n    </h1>\n    <h2>{{pharmacy?.pharmacy.denomination}}</h2>\n    <!--div><i>complétet avec les informations</i></div-->\n    <p>{{pharmacy?.pharmacy.commune}}<br />{{pharmacy?.pharmacy.address}}</p>\n    <p><ion-icon name="call"></ion-icon>&nbsp;&nbsp;{{pharmacy?.pharmacy.contacts}}</p>\n    <p>\n      <button *ngIf="pharmacy?.pharmacy?.latitude" ion-button="" (click)="api.locate(pharmacy?.pharmacy)">Itinéraire sur carte</button>\n      <button ion-button="" (click)="api.call(pharmacy?.pharmacy)">\n        <ion-icon name="call"></ion-icon>\n      </button>\n    </p>\n    <p>\n      <button ion-button="" clear="" (click)="dismiss()">Retour</button>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/pharmacy/pharmacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], PharmacyPage);
    return PharmacyPage;
}());

//# sourceMappingURL=pharmacy.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_request__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requests_requests__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ordonance_ordonance__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, api, camera, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.api = api;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.searchQuery = '';
        this.request = [];
        this.requestSent = this.api.reqSent;
        if (this.api.curReqkey) {
            this.api.requestRestarter();
        }
        this.api.afdb.object('dispomed_requests/' + this.api.curReqkey)
            .valueChanges()
            .subscribe(function (data) {
            _this.req = data;
        });
        this.api.afdb.list('dispomed_requests/' + this.api.curReqkey + '/answers')
            .snapshotChanges(['child_added'])
            .subscribe(function (data) {
            if (data.answers) {
                console.log('ans');
                _this.api.localNotif('Vous avez une nouvelle réponse pour votre requête!');
            }
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.initializeItems = function () {
        this.items = this.api.druglist;
        /*this.items = [
          {'id':'1','name':'Paracetamol'},
          {'id':'2','name':'Viagra'},
        ];*/
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            var x = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.items = x.slice(0, 9);
        }
        else {
            return this.items = null;
        }
    };
    HomePage.prototype.addMed = function (item) {
        //@TODO trouver le moyen d'ajouter les éléments (medicaments choisits) au tableau des medicament sans duplication
        /*if (this.request) {
          this.request[item.id]=item;
        }
        else {
          let x =new Array();
          x[item.id]=item
          this.request = x
        }*/
        item.answers = [];
        this.request.push(item);
        //console.log(this.request);
        this.api.presentToast(item.name + ' ajouté');
        window.scrollTo(0, 0);
        this.items = null;
    };
    HomePage.prototype.rmMed = function (id) {
        this.request.splice(id, 1);
    };
    HomePage.prototype.sendRequest = function () {
        this.anwcount = 0;
        if (!this.api.user.city) {
            this.api.promptVille(this.request);
        }
        else {
            this.api.sendRequest(this.request);
        }
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.goRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__request_request__["a" /* RequestPage */], this.req);
    };
    HomePage.prototype.goRequests = function () {
        if (this.api.user.isofficinevalidated == false) {
            this.api.showAlert('Votre compte pharmacien n\'est pas encore validée.', '');
            return false;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__requests_requests__["a" /* RequestsPage */]);
        }
    };
    HomePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            //destinationType: 1,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 1024,
            targetHeight: 1024
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(imageData.length);
            var item = { id: Date.now(), name: 'ORDONANCE', image: imageData };
            _this.addMed(item);
        }, function (err) {
            // Handle error
            console.log();
        });
    };
    HomePage.prototype.showPhoto = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__ordonance_ordonance__["a" /* OrdonancePage */], item);
        modal.present();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      &nbsp;DispoMed\n    </ion-title>\n    <ion-buttons end="">\n      <!--ion-chip style="margin-top: 10px" *ngIf="!api.isofficine">\n        <button ion-button="" (click)="goRequests()">\n          <ion-icon name="notifications" color="red"></ion-icon>\n        </button>\n        <ion-label>00 Requêtes</ion-label>\n      </ion-chip-->\n      <button *ngIf="request?.length>0" ion-button="" color="primary" icon-start="" round="">\n        <ion-icon name="search"></ion-icon>\n        <ion-badge class="animated infinite pulse" *ngIf="request?.length>0" color="danger">\n          {{request?.length || 0}}\n        </ion-badge>\n      </button>\n      <button *ngIf="api.user?.isofficine" ion-button="" color="primary" icon-start="" round="" (click)="goRequests()">\n        <ion-icon name="notifications"></ion-icon>\n        <ion-badge class="animated infinite heartBeat" *ngIf="api.alertquests.length>0" color="danger">\n          {{api.alertquests?.length || 0}}\n        </ion-badge>\n      </button>\n\n      <button (click)="goProfile()" ion-button=""\n              style="padding: 5px 9px;margin: 12px 19px;border-radius: 50%;background: silver;">\n        <ion-icon name="person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="" text-center="">\n  <img *ngIf="!request.length" src="assets/imgs/logo.png" style="height: 128px; border-radius: 50%" class="animated bounceIn">\n  <img *ngIf="request.length>0" src="assets/imgs/logo.png" style="height: 64px; border-radius: 50%" class="animated bounceIn">\n  <h2 *ngIf="!items">DispoMed</h2>\n  <div *ngIf="!api.reqSent">\n    <p *ngIf="request?.length>0">\n      <ion-chip *ngFor="let item of request ; let i = index">\n        <ion-icon name="close" color="circle" (click)="rmMed(i)"></ion-icon>\n        <ion-label *ngIf="item.image" (click)="showPhoto(item)">{{item?.name}}\n          <ion-icon name="camera"></ion-icon>\n        </ion-label>\n        <ion-label *ngIf="!item.image">{{item?.name}}</ion-label>\n      </ion-chip>&nbsp;<br>\n      <button *ngIf="api.user.city" ion-button="" (click)="sendRequest()"> Envoyer la requete</button>\n      <button *ngIf="!api.user.city" ion-button="" small="" (click)="api.promptVille(request)"> Définissez votre ville</button>\n    </p>\n    <p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10="" col-auto="">\n            <ion-searchbar placeholder="Tapez ici le medicament" (ionInput)="getItems($event)"></ion-searchbar>\n          </ion-col>\n          <ion-col col-2="" col-auto="" style="padding-top: 13px">\n            <button ion-button="" (click)="takePicture()">\n              <ion-icon name="camera"></ion-icon>\n            </button>\n            <div>{{api.uploadPercent}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </p>\n    <ion-list>\n      <ion-item *ngFor="let item of items" (click)="addMed(item)">\n        {{ item.name }}\n        <button ion-button="" item-end="">\n          <ion-icon>+</ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf="api.reqSent">\n    <h3 *ngIf="!api.curReq.countDownExpires">Veuillez patienter 5min,<br>les pharmacies les plus proches sont en train de vérifier pour vous leur stocks.</h3>\n    <h3 *ngIf="api.curReq.countDownExpires">Votre requête reste encore active 1h pour que toutes les pharmacies répondent\n      <!--oubien cloturer la requete maintenant--></h3>\n    <h1 *ngIf="!api.curReq.countDownExpires">{{api.curReq.countDown}}</h1>\n    <h1 *ngIf="api.curReq.countDownExpires">{{api.curReq.countDownHour}}</h1>\n    <button class="animated infinite pulse" *ngIf="!api.curReq.countDownExpires" ion-button="" round="" clear=""\n            strong="" large="">\n      {{api.countObj(req?.answers) || "0"}} Réponse(s)\n    </button>\n    <div *ngIf="api.curReq.countDownExpires">\n      <button class="animated infinite pulse" ion-button="" round="" strong="" large="" (click)="goRequest()">\n        {{api.countObj(req?.answers) || "0"}} Réponse(s)\n      </button>\n      <br>\n    </div>\n    <div>\n      <h3>Les médicaments recherchés:</h3>\n      <ion-chip *ngFor="let item of api.curReq?.drugs">\n        <!--ion-icon name="close" color="circle"></ion-icon-->\n        <ion-label *ngIf="item.image" (click)="showPhoto(item)">{{item?.name}}\n          <ion-icon name="camera"></ion-icon>\n        </ion-label>\n        <ion-label *ngIf="!item.image">{{item?.name}}</ion-label>\n      </ion-chip>&nbsp;\n    </div>\n    <div>\n      <p>&nbsp;</p>\n      <hr>\n      <button ion-button="" color="danger" round="" small="" (click)="api.closeRequest()">Annuler la recherche</button>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/home/home.html"*/,
            providers: [[__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmacy_pharmacy__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordonance_ordonance__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, navParams, api, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.modalCtrl = modalCtrl;
        if (this.navParams.data != null) {
            this.api.afdb.object('dispomed_requests/' + this.navParams.data.key)
                .valueChanges()
                .subscribe(function (data) {
                _this.request = data;
            });
        }
        else {
            this.request = this.api.curafdbReq;
        }
        //console.log(this.request);
    }
    RequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    RequestPage.prototype.toggleAns = function (item) {
        if (!item.a) {
            item.a = true;
        }
        else if (item.a) {
            item.a = false;
        }
    };
    RequestPage.prototype.goPharma = function (item) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pharmacy_pharmacy__["a" /* PharmacyPage */], item);
        profileModal.present();
    };
    RequestPage.prototype.answer = function (rkey, did) {
        this.api.promptAnswer(rkey, did);
    };
    RequestPage.prototype.showPhoto = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__ordonance_ordonance__["a" /* OrdonancePage */], item);
        modal.present();
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/request/request.html"*/'<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>DispoMed</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div text-center="">\n    <h1 *ngIf="api.isofficine">Recherche de {{request?.client}}</h1>\n    <h1 *ngIf="!api.isofficine">Vos recherches du {{request?.date | date:\'dd/MM/yyyy\'}}</h1>\n    <!--h4 *ngIf="request?.clientphone">Contact:{{request?.clientphone}}<br></h4-->\n    <p *ngIf="!api.isofficine">{{api.countObj(request?.answers) || 00}} Réponses au total.</p>\n    <p *ngIf="api.isofficine">{{request?.date | date:\'dd/MM/yyyy\'}}</p>\n  </div>\n  <ion-list padding="" *ngIf="!api.isofficine" lines="">\n    <ion-item *ngFor="let drug of request?.drugs">\n      <h2 (click)="toggleAns(drug)">{{drug?.name}}</h2>\n      <div *ngIf="!drug?.answers" item-end="">{{drug?.answers?.length || 0}} Réponses</div>\n      <div *ngIf="drug?.answers">\n        <ion-list no-lines="">\n          <ion-item *ngFor="let ans of api.obj2arr(drug?.answers)">\n            <span>{{ans?.pharmacy.denomination}}</span>\n            <button item-end="" ion-button="" (click)="goPharma(ans)">Voir</button>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-list padding="" *ngIf="api.isofficine" lines="">\n    <ion-item *ngFor="let drug of request?.drugs; index as i">\n      <button ion-button="" *ngIf="drug.image" item-start="" (click)="showPhoto(drug)">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n      <h2 (click)="answer(request?.key, i)">{{drug?.name}}</h2>\n      <button *ngIf="api.dejaRep(drug)" item-end="" ion-button="" (click)="answer(request?.key, i)">\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n      <button *ngIf="!api.dejaRep(drug)" item-end="" ion-button="" color="danger" clear=""\n              (click)="answer(request?.key, i)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n  <!--p text-center="" *ngIf="request?.clientphone">\n    <button ion-button="" (click)="api.call(request.clientphone)">\n      <ion-icon name="call"></ion-icon> &nbsp; Appeler le client\n    </button>\n  </p-->\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/historyreq/historyreq.module": [
		274
	],
	"../pages/ordonance/ordonance.module": [
		426
	],
	"../pages/pharmacy/pharmacy.module": [
		427
	],
	"../pages/pharmahome/pharmahome.module": [
		428
	],
	"../pages/profile/profile.module": [
		432
	],
	"../pages/request/request.module": [
		433
	],
	"../pages/requests/requests.module": [
		434
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 273;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryreqPageModule", function() { return HistoryreqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historyreq__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryreqPageModule = /** @class */ (function () {
    function HistoryreqPageModule() {
    }
    HistoryreqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historyreq__["a" /* HistoryreqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historyreq__["a" /* HistoryreqPage */]),
            ],
        })
    ], HistoryreqPageModule);
    return HistoryreqPageModule;
}());

//# sourceMappingURL=historyreq.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryreqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmacy_pharmacy__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordonance_ordonance__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HistoryreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryreqPage = /** @class */ (function () {
    function HistoryreqPage(navCtrl, navParams, api, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.request = this.navParams.data;
    }
    HistoryreqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    HistoryreqPage.prototype.toggleAns = function (item) {
        if (!item.a) {
            item.a = true;
        }
        else if (item.a) {
            item.a = false;
        }
    };
    HistoryreqPage.prototype.goPharma = function (item) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pharmacy_pharmacy__["a" /* PharmacyPage */], item);
        profileModal.present();
    };
    HistoryreqPage.prototype.showPhoto = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__ordonance_ordonance__["a" /* OrdonancePage */], item);
        modal.present();
    };
    HistoryreqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historyreq',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/historyreq/historyreq.html"*/'<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Requête</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div text-center="">\n    <h1 *ngIf="api.isofficine">Requete de {{request.client}}</h1>\n    <h4>Requete du {{request.date | date:\'yyy/MM/dd\'}}</h4>\n    <p *ngIf="!api.isofficine">{{api.countObj(request.answers) || 00}} Réponses au total.</p>\n  </div>\n  <ion-list padding="" *ngIf="!api.isofficine">\n    <ion-item *ngFor="let drug of request.drugs">\n      <button ion-button="" *ngIf="drug.image" item-start="" (click)="showPhoto(drug)">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n      <h2 (click)="toggleAns(drug)">{{drug?.name}}</h2>\n      <div *ngIf="!drug?.answers" item-end="">{{drug?.answers?.length || 0}} Réponses</div>\n      <div *ngIf="drug?.answers">\n        <ion-list>\n          <ion-item *ngFor="let ans of api.obj2arr(drug?.answers)">\n            <h3>{{ans?.pharmacy.denomination}}</h3>\n            <button item-end="" ion-button="" (click)="goPharma(ans)">Voir</button>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-list padding="" *ngIf="api.isofficine">\n    <ion-item *ngFor="let drug of request.drugs; index as i">\n      <h2>{{drug?.name}}</h2>\n      <!--button item-end="" ion-button="" (click)="answer(request.key, i)">Répondre</button-->\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/historyreq/historyreq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HistoryreqPage);
    return HistoryreqPage;
}());

//# sourceMappingURL=historyreq.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdonancePageModule", function() { return OrdonancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordonance__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdonancePageModule = /** @class */ (function () {
    function OrdonancePageModule() {
    }
    OrdonancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ordonance__["a" /* OrdonancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ordonance__["a" /* OrdonancePage */]),
            ],
        })
    ], OrdonancePageModule);
    return OrdonancePageModule;
}());

//# sourceMappingURL=ordonance.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyPageModule", function() { return PharmacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pharmacy__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PharmacyPageModule = /** @class */ (function () {
    function PharmacyPageModule() {
    }
    PharmacyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pharmacy__["a" /* PharmacyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pharmacy__["a" /* PharmacyPage */]),
            ],
        })
    ], PharmacyPageModule);
    return PharmacyPageModule;
}());

//# sourceMappingURL=pharmacy.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmahomePageModule", function() { return PharmahomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pharmahome__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PharmahomePageModule = /** @class */ (function () {
    function PharmahomePageModule() {
    }
    PharmahomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pharmahome__["a" /* PharmahomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pharmahome__["a" /* PharmahomePage */]),
            ],
        })
    ], PharmahomePageModule);
    return PharmahomePageModule;
}());

//# sourceMappingURL=pharmahome.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmahomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PharmahomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PharmahomePage = /** @class */ (function () {
    function PharmahomePage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.pharm = {};
        this.officines = this.api.officines;
        this.towns = this.api.towns;
    }
    PharmahomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PharmahomePage');
    };
    PharmahomePage.prototype.register = function () {
        this.api.registerPharm(this.pharm);
    };
    PharmahomePage.prototype.cancel = function () {
        this.pharm = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    PharmahomePage.prototype.gohome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    PharmahomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pharmahome',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/pharmahome/pharmahome.html"*/'<!--\n  Generated template for the PharmahomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--ion-header>\n\n  <ion-navbar>\n    <ion-title>pharmahome</ion-title>\n  </ion-navbar>\n\n</ion-header-->\n\n\n<ion-content padding="" text-center="">\n  <div style="height: 5vh"></div>\n  <img src="assets/imgs/logo.png" style="height: 128px; border-radius: 50%">\n  <h2>DispoMed</h2>\n  <div *ngIf="!api.isofficine">\n    <p>Veuillez remplir le formulaire suivant pour créer votre compte pharmacien.</p>\n    <ion-list inset="">\n      <ion-item>\n        <ion-label color="primary" stacked>Nom préom(s)</ion-label>\n        <ion-input [(ngModel)]="pharm.name" placeholder="Nom préom(s)" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Téléphone</ion-label>\n        <ion-input [(ngModel)]="pharm.phone" placeholder="Téléphone" type="tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Ville</ion-label>\n        <ion-select [(ngModel)]="pharm.city">\n          <ion-option *ngFor="let item of towns" [value]="item">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Pharmacie</ion-label>\n        <ion-select [(ngModel)]="pharm.pharmacy">\n          <ion-option *ngFor="let item of officines" [value]="item">{{item.denomination}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Nom complet du titulaire</ion-label>\n        <ion-input [(ngModel)]="pharm.owner" placeholder="Nom complet du titulaire" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n      </ion-item>\n    </ion-list>\n    <button ion-button="" (click)="register()">Enregistrer</button>\n    <button ion-button="" (click)="cancel()" clear="">Annuler</button>\n  </div>\n  <div *ngIf="api.isofficine">\n    <p>Votre requete sera soumis à approvation dans un délais de 6h maximum</p>\n    <button ion-button="" (click)="gohome()">Continuer</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/pharmahome/pharmahome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], PharmahomePage);
    return PharmahomePage;
}());

//# sourceMappingURL=pharmahome.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmahome_pharmahome__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historyreq_historyreq__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.history = false;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goHistory = function () {
        this.history = true;
    };
    ProfilePage.prototype.goProfile = function () {
        this.history = false;
    };
    ProfilePage.prototype.goRequest = function (req) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__historyreq_historyreq__["a" /* HistoryreqPage */], req);
    };
    ProfilePage.prototype.welcomePharma = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pharmahome_pharmahome__["a" /* PharmahomePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mon compte</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center="">\n    <ion-icon *ngIf="api.isofficine" name="home" style="font-size: 7em"></ion-icon>\n    <ion-icon *ngIf="!api.isofficine" name="person" style="font-size: 7em"></ion-icon>\n    <h3>{{api?.user?.name || \'Nom & Prénoms\'}}</h3>\n    <strong *ngIf="api.isofficine">{{api?.user?.pharmacy.denomination}}</strong>\n  </div>\n  <div text-center="" *ngIf="!history">\n    <h1>&nbsp;</h1>\n    <ion-list *ngIf="!api?.user?.isofficine">\n      <ion-item>\n        <ion-label color="primary" stacked>Nom préom(s)</ion-label>\n        <ion-input type="text" placeholder="Votre nom complet" [(ngModel)]="api.user.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Téléphone</ion-label>\n        <ion-input type="tel" placeholder="Votre numéro de téléphone" [(ngModel)]="api.user.phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Ville</ion-label>\n        <ion-select [(ngModel)]="api.user.city">\n          <ion-option [value]="api?.user?.city">{{api?.user?.city?.name}}</ion-option>\n          <ion-option *ngFor="let item of api.towns" [value]="item">{{item?.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="api?.user?.isofficine">\n      <ion-item>\n        <ion-label color="primary" stacked>Nom préom(s)</ion-label>\n        <ion-input type="text" placeholder="Votre nom complet" [(ngModel)]="api.user.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Téléphone</ion-label>\n        <ion-input type="tel" placeholder="Votre numéro de téléphone" [(ngModel)]="api.user.phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Ville</ion-label>\n        <ion-select [(ngModel)]="api.user.city">\n          <ion-option [value]="api?.user?.city">{{api?.user?.city?.name}}</ion-option>\n          <ion-option *ngFor="let item of api.towns" [value]="item">{{item?.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Pharmacie</ion-label>\n        <ion-select [(ngModel)]="api.user.pharmacy">\n          <ion-option [value]="api?.user?.pharmacy">{{api?.user?.pharmacy?.denomination}}</ion-option>\n          <ion-option *ngFor="let item of api.officines" [value]="item">{{item.denomination}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Le titulaire</ion-label>\n        <ion-input type="text" placeholder="Nom complet du titulaire" [(ngModel)]="api.user.owner"></ion-input>\n      </ion-item>\n      <ion-item>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button="" (click)="api.saveProfile(api.user)">Mettre a jour</button>\n    <button ion-button="" (click)="goHistory()">Historique</button>\n\n  </div>\n  <hr>\n  <div text-center="" *ngIf="history">\n    <h4>Historique</h4>\n    <ion-list>\n      <ion-item *ngFor="let item of api.myrequests" (click)="goRequest(item)">\n        <h2>{{item.drugs.length}} Médicaments</h2>\n        <p><span *ngFor="let med of item?.drugs">{{med?.name}} - </span></p>\n        <p> Le {{item.date | date:\'yyyy-M-dd\'}} à {{item.date | date:\'H:m\'}}</p>\n      </ion-item>\n    </ion-list>\n    <button ion-button="" (click)="goProfile()">Retour</button>\n  </div>\n  <div text-center="" *ngIf="!api.isofficine">\n    <h1>&nbsp;</h1>\n    <button ion-button="" color="danger" round="" (click)="welcomePharma()">Créer un compte pharmacien</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_request__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestsPage = /** @class */ (function () {
    function RequestsPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
    }
    RequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestsPage');
    };
    RequestsPage.prototype.goRequest = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__request_request__["a" /* RequestPage */], item);
    };
    RequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requests',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/requests/requests.html"*/'<!--\n  Generated template for the RequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Requêtes en attente ...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of api.alertquests">\n      <ion-item (click)="goRequest(item)">\n        <ion-icon name="notifications" item-start=""></ion-icon>\n        <h2>{{item.client}}, {{item.drugs.length}} médicaments</h2>\n        <p><strong *ngFor="let d of item.drugs">{{d.name}},&nbsp; </strong></p>\n        <!--p>{{api.moment(item.date , "YYYYMMDD H:m:s").lang(\'fr\').fromNow()}}</p-->\n        <p>{{item.date | date:\'dd/MM/yyyy\'}} à {{item.date | date:\'H:m\'}}</p>\n      </ion-item>\n      <!--ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Email\n        </button>\n      </ion-item-options-->\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/requests/requests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], RequestsPage);
    return RequestsPage;
}());

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestPageModule = /** @class */ (function () {
    function RequestPageModule() {
    }
    RequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */]),
            ],
        })
    ], RequestPageModule);
    return RequestPageModule;
}());

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageModule", function() { return RequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requests__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestsPageModule = /** @class */ (function () {
    function RequestsPageModule() {
    }
    RequestsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__requests__["a" /* RequestsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__requests__["a" /* RequestsPage */]),
            ],
        })
    ], RequestsPageModule);
    return RequestsPageModule;
}());

//# sourceMappingURL=requests.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(localNotifications, http, loadingCtrl, toastCtrl, alertCtrl, afdb) {
        var _this = this;
        this.localNotifications = localNotifications;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.afdb = afdb;
        this.reqSent = false;
        this.countDownExpires = false;
        this.gmapUrl = 'https://www.google.com/maps/search/?api=1&query=';
        this.xDate = Date;
        console.log('Hello ApiProvider Provider');
        if (!localStorage.getItem('dispomed_uid')) {
            this.uid = Date.now();
            this.afdb.object('dispomed_users/' + this.uid).set({ name: 'anonymous' });
            localStorage.setItem('dispomed_uid', this.uid.toString());
        }
        else {
            this.uid = localStorage.getItem('dispomed_uid');
        }
        this.afdb.object('dispomed_users/' + this.uid).valueChanges().subscribe(function (data) {
            //
            if (!data) {
                _this.user = { name: 'anonymous' };
            }
            else {
                _this.user = data;
            }
        });
        this.curReq = JSON.parse(localStorage.getItem('dispomed_cureq'));
        this.curReqkey = localStorage.getItem('dispomed_curReqkey');
        this.moment = __WEBPACK_IMPORTED_MODULE_3_moment___default.a;
        this.reqSent = !!localStorage.getItem('dispomed_reqsent');
        this.isofficine = !!localStorage.getItem('dispomed_isofficine');
        this.curafdbReq = this.afdb.object('dispomed_requests/' + this.curReqkey).valueChanges();
        this.wrequests = [];
        this.myrequests = [];
        this.alertquests = [];
        this.afdb.list('dispomed_requests/', function (ref) { return ref.orderByChild('clientid').equalTo(_this.uid); })
            .valueChanges()
            .subscribe(function (data) {
            _this.myrequests = data;
        });
        this.afdb.list('dispomed_requests/', function (ref) { return ref.orderByChild('expire').equalTo(false); })
            .valueChanges()
            .subscribe(function (data) {
            _this.alertquests = data.filter(function (r) { return r.city == _this.user.city.id; });
        });
        this.http.get('assets/data/drugslist.json')
            .subscribe(function (data) {
            _this.druglist = data;
            //console.dir(this.druglist);
        });
        this.http.get('assets/data/officines.json')
            .subscribe(function (data) {
            _this.officines = data;
            //console.dir(this.druglist);
        });
        this.http.get('assets/data/towns.json')
            .subscribe(function (data) {
            _this.towns = data;
            //console.dir(this.druglist);
        });
    }
    ApiProvider.prototype.getCurrentRequest = function () {
        return this.curReq;
    };
    ApiProvider.prototype.localNotif = function (message) {
        this.localNotifications.schedule({
            id: Math.floor(Math.random() * Math.floor(1000)),
            text: message,
        });
    };
    ApiProvider.prototype.sendRequest = function (request) {
        var _this = this;
        this.curReq = {};
        this.curReq.drugs = request;
        this.curReq.client = this.user.name ? this.user.name : 'ananymous';
        this.curReq.clientphone = this.user.phone ? this.user.phone : '';
        this.curReq.clientid = this.uid;
        this.curReq.answers = [];
        this.curReq.expire = false;
        this.curReq.city = this.tempcity ? this.tempcity : this.user.city.id;
        this.curReq.date = Date.now();
        var loading = this.loadingCtrl.create({
            content: 'Envoi en cours ...'
        });
        loading.present();
        this.requestTimer();
        //this.curReq = r;
        localStorage.setItem('dispomed_cureq', JSON.stringify(this.curReq));
        //////////////////////////////////////////////////////////////////////////////////////
        var list = this.afdb.list('dispomed_requests');
        list.push(this.curReq).then(function (e) {
            _this.curReqkey = e.key;
            localStorage.setItem('dispomed_curReqkey', e.key);
            //setTimeout(() => {
            loading.dismiss();
            _this.curReqkey = e.key;
            localStorage.setItem('dispomed_curReqkey', e.key);
            _this.afdb.object('dispomed_requests/' + _this.curReqkey).update({ 'key': _this.curReqkey });
            _this.curafdbReq = _this.afdb.object('dispomed_requests/' + _this.curReqkey).valueChanges();
            //this.afdb.object('dispomed_requests/' + this.curReqkey + '/client/' + [this.uid]).set(true)
            //}, 2000);
            //
            _this.reqSent = true;
            localStorage.setItem('dispomed_reqsent', 'true');
            //setTimeout(() => {
            //},3000)
        }).then(function (e) {
            window.location.reload();
        });
    };
    ApiProvider.prototype.requestTimer = function () {
        ////////////////////////////////////////////////affaire de date et d'ajout de minutes
        this.xDate.prototype.addMinutes = function (minutes) {
            var copiedDate = new Date(this.getTime());
            return new Date(copiedDate.getTime() + minutes * 60000);
        };
        var add_minutes = function (dt, minutes) {
            return new Date(dt + minutes * 60000);
        };
        //console.log(add_minutes(new Date(2014,10,2), 30).toString());
        //@TODO rajouter les 5min
        this.curReq.countDownDate = add_minutes(this.curReq.date, 5);
        //@TODO rajouter les 60min
        this.curReq.countDownHour = add_minutes(this.curReq.date, 60);
        //console.log(this.curReq.countDownDate)
        var countDownDate = this.curReq.countDownDate;
        var countDownHour = this.curReq.countDownHour;
        var ih = this;
        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get todays date and time
            //let now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - Date.now();
            // Time calculations for days, hours, minutes and seconds
            //let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            //let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            //console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);
            var mm = "";
            var ss = "";
            if (minutes < 10) {
                mm = "0" + minutes;
            }
            else {
                mm = minutes;
            }
            if (seconds < 10) {
                ss = "0" + seconds;
            }
            else {
                ss = seconds;
            }
            // Output the result in an element with id="demo"
            ih.curReq.countDown = /*days + "d " + hours + "h " +*/ mm + ":" + ss + "";
            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                ih.curReq.countDown = "EXPIRED";
                ih.curReq.countDownExpires = true;
            }
        }, 1000);
        var y = setInterval(function () {
            // Get todays date and time
            //let now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownHour - Date.now();
            // Time calculations for days, hours, minutes and seconds
            //let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            //let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            //console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);
            var mm = "";
            var ss = "";
            if (minutes < 10) {
                mm = "0" + minutes;
            }
            else {
                mm = minutes;
            }
            if (seconds < 10) {
                ss = "0" + seconds;
            }
            else {
                ss = seconds;
            }
            // Output the result in an element with id="demo"
            ih.curReq.countDownHour = /*days + "d " + hours + "h " +*/ mm + ":" + ss + "";
            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(y);
                ih.curReq.countDownHour = "EXPIRED";
                ih.curReq.countDownHourExpires = true;
                ih.afdb.object('dispomed_requests/' + ih.curReqkey).update({ 'expire': true }),
                    ih.closeRequest();
            }
        }, 1000);
    };
    ApiProvider.prototype.requestRestarter = function () {
        //let req = JSON.parse(localStorage.getItem('dispomed_cureq'));
        this.requestTimer();
    };
    ApiProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000
        });
        toast.present();
    };
    ApiProvider.prototype.promptVille = function (request) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ville de résidence',
            enableBackdropDismiss: false,
            message: 'Veuillez spécifier votre ville pour une recherche efficace de pharmacies plus proches de vous.',
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        if (!data) {
                            _this.promptVille(request);
                        }
                        else {
                            _this.tempcity = data;
                            _this.afdb.object('dispomed_users/' + _this.uid).update({ city: data });
                            //this.sendRequest(request);
                        }
                    }
                }
            ]
        });
        for (var _i = 0, _a = this.towns; _i < _a.length; _i++) {
            var town = _a[_i];
            alert.addInput({
                type: 'radio',
                label: town.name,
                value: town,
                name: 'city'
            });
        }
        alert.present();
    };
    ApiProvider.prototype.promptAnswer = function (rkey, did) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Disponibilité',
            message: 'Vous confirmez avoir ce médicament en stock?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        _this.afdb.object('dispomed_requests/' + rkey + '/drugs/' + did + '/answers/' + [_this.uid]).remove();
                        _this.afdb.object('dispomed_requests/' + rkey + '/answers/' + [_this.uid]).remove();
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.afdb.object('dispomed_requests/' + rkey + '/drugs/' + did + '/answers/' + [_this.uid]).set((_a = {
                                date: Date.now()
                            },
                            _a[_this.uid] = true,
                            _a.pharmacy = _this.user.pharmacy,
                            _a));
                        _this.afdb.object('dispomed_requests/' + rkey + '/answers/' + [_this.uid]).set(true);
                        var _a;
                    }
                }
            ]
        });
        confirm.present();
    };
    ApiProvider.prototype.presentLoading = function (msg) {
        var loading = this.loadingCtrl.create({
            content: msg
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    ApiProvider.prototype.editProfile = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Mon profile',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'name',
                    label: 'Nom & Prénom(s)',
                    placeholder: 'Nom & Prénom(s)'
                },
                {
                    name: 'phone',
                    label: 'Mon Téléphone',
                    type: 'tel',
                    placeholder: 'Mon Téléphone'
                },
                {
                    name: 'city',
                    label: 'Ma Ville',
                    placeholder: 'Ma Ville'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enregistrer',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.afdb.object('dispomed_users/' + _this.uid).update(data);
                        //this.user = data;
                    }
                }
            ]
        });
        prompt.present();
    };
    ApiProvider.prototype.saveProfile = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Modifications en cours'
        });
        loading.present().then(function (data) {
            _this.afdb.object('dispomed_users/' + _this.uid).update(user).then(function (data) {
                loading.dismiss();
            });
        });
    };
    ApiProvider.prototype.call = function (item) {
        window.open('tel://' + item.telephone, '_system');
    };
    ApiProvider.prototype.locate = function (item) {
        //@TODO integrer inappbrowser
        window.open(this.gmapUrl + item.latitude + ',' + item.longitude, '_system');
        //console.log(item.geo)
    };
    ApiProvider.prototype.closeRequest = function () {
        this.curReq.closed = true;
        this.reqSent = false;
        this.myrequests.push(this.curReq);
        this.afdb.object('dispomed_users/' + this.uid + '/requests/').update((_a = {}, _a[this.curReqkey] = true, _a));
        this.afdb.object('dispomed_requests/' + this.curReqkey).update({ 'expire': true });
        localStorage.removeItem('dispomed_curReqkey');
        localStorage.removeItem('dispomed_reqsent');
        localStorage.removeItem('dispomed_cureq');
        var _a;
    };
    ApiProvider.prototype.registerPharm = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Envoi en cours ...'
        });
        loading.present();
        user.cdate = new Date();
        user.isofficine = true;
        user.isofficinevalidated = false;
        console.log(user);
        this.afdb.object('dispomed_users/' + this.uid).update(user).then(function (data) {
            _this.isofficine = true;
            localStorage.setItem('dispomed_isofficine', 'true');
            loading.dismiss();
            //
        });
    };
    ApiProvider.prototype.countObj = function (o) {
        var count = 0;
        for (var c in o) {
            count = count + 1;
            c.length;
        }
        return count;
    };
    ApiProvider.prototype.obj2arr = function (o) {
        var user = o;
        var arr = [];
        for (var key in user) {
            if (user.hasOwnProperty(key)) {
                arr.push(user[key]);
            }
        }
        return arr;
    };
    ApiProvider.prototype.dejaRep = function (p) {
        var ans = p.answers ? p.answers : {};
        return ans.hasOwnProperty([this.uid]);
    };
    ApiProvider.prototype.showAlert = function (sub, msg) {
        var alert = this.alertCtrl.create({
            title: 'DispoMed',
            subTitle: sub,
            message: msg,
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        //console.log('Cancel clicked');
                    }
                }]
        });
        alert.present();
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(609);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_request_request_module__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pharmahome_pharmahome_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pharmacy_pharmacy_module__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_requests_requests_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_database__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_historyreq_historyreq_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ordonance_ordonance_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_local_notifications__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAdObHow109uB-4aPdz3qxklOTE6bjcBGs",
        authDomain: "dispomed-da61b.firebaseapp.com",
        databaseURL: "https://dispomed-da61b.firebaseio.com",
        projectId: "dispomed-da61b",
        storageBucket: "dispomed-da61b.appspot.com",
        messagingSenderId: "521388710211"
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_request_request_module__["RequestPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_pharmahome_pharmahome_module__["PharmahomePageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_pharmacy_pharmacy_module__["PharmacyPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_requests_requests_module__["RequestsPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_historyreq_historyreq_module__["HistoryreqPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_ordonance_ordonance_module__["OrdonancePageModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire__["a" /* AngularFireModule */].initializeApp(environment.firebase),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/historyreq/historyreq.module#HistoryreqPageModule', name: 'HistoryreqPage', segment: 'historyreq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordonance/ordonance.module#OrdonancePageModule', name: 'OrdonancePage', segment: 'ordonance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pharmacy/pharmacy.module#PharmacyPageModule', name: 'PharmacyPage', segment: 'pharmacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pharmahome/pharmahome.module#PharmahomePageModule', name: 'PharmahomePage', segment: 'pharmahome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requests/requests.module#RequestsPageModule', name: 'RequestsPage', segment: 'requests', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Badge */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 277,
	"./af.js": 277,
	"./ar": 278,
	"./ar-dz": 279,
	"./ar-dz.js": 279,
	"./ar-kw": 280,
	"./ar-kw.js": 280,
	"./ar-ly": 281,
	"./ar-ly.js": 281,
	"./ar-ma": 282,
	"./ar-ma.js": 282,
	"./ar-sa": 283,
	"./ar-sa.js": 283,
	"./ar-tn": 284,
	"./ar-tn.js": 284,
	"./ar.js": 278,
	"./az": 285,
	"./az.js": 285,
	"./be": 286,
	"./be.js": 286,
	"./bg": 287,
	"./bg.js": 287,
	"./bm": 288,
	"./bm.js": 288,
	"./bn": 289,
	"./bn.js": 289,
	"./bo": 290,
	"./bo.js": 290,
	"./br": 291,
	"./br.js": 291,
	"./bs": 292,
	"./bs.js": 292,
	"./ca": 293,
	"./ca.js": 293,
	"./cs": 294,
	"./cs.js": 294,
	"./cv": 295,
	"./cv.js": 295,
	"./cy": 296,
	"./cy.js": 296,
	"./da": 297,
	"./da.js": 297,
	"./de": 298,
	"./de-at": 299,
	"./de-at.js": 299,
	"./de-ch": 300,
	"./de-ch.js": 300,
	"./de.js": 298,
	"./dv": 301,
	"./dv.js": 301,
	"./el": 302,
	"./el.js": 302,
	"./en-SG": 303,
	"./en-SG.js": 303,
	"./en-au": 304,
	"./en-au.js": 304,
	"./en-ca": 305,
	"./en-ca.js": 305,
	"./en-gb": 306,
	"./en-gb.js": 306,
	"./en-ie": 307,
	"./en-ie.js": 307,
	"./en-il": 308,
	"./en-il.js": 308,
	"./en-nz": 309,
	"./en-nz.js": 309,
	"./eo": 310,
	"./eo.js": 310,
	"./es": 311,
	"./es-do": 312,
	"./es-do.js": 312,
	"./es-us": 313,
	"./es-us.js": 313,
	"./es.js": 311,
	"./et": 314,
	"./et.js": 314,
	"./eu": 315,
	"./eu.js": 315,
	"./fa": 316,
	"./fa.js": 316,
	"./fi": 317,
	"./fi.js": 317,
	"./fo": 318,
	"./fo.js": 318,
	"./fr": 319,
	"./fr-ca": 320,
	"./fr-ca.js": 320,
	"./fr-ch": 321,
	"./fr-ch.js": 321,
	"./fr.js": 319,
	"./fy": 322,
	"./fy.js": 322,
	"./ga": 323,
	"./ga.js": 323,
	"./gd": 324,
	"./gd.js": 324,
	"./gl": 325,
	"./gl.js": 325,
	"./gom-latn": 326,
	"./gom-latn.js": 326,
	"./gu": 327,
	"./gu.js": 327,
	"./he": 328,
	"./he.js": 328,
	"./hi": 329,
	"./hi.js": 329,
	"./hr": 330,
	"./hr.js": 330,
	"./hu": 331,
	"./hu.js": 331,
	"./hy-am": 332,
	"./hy-am.js": 332,
	"./id": 333,
	"./id.js": 333,
	"./is": 334,
	"./is.js": 334,
	"./it": 335,
	"./it-ch": 336,
	"./it-ch.js": 336,
	"./it.js": 335,
	"./ja": 337,
	"./ja.js": 337,
	"./jv": 338,
	"./jv.js": 338,
	"./ka": 339,
	"./ka.js": 339,
	"./kk": 340,
	"./kk.js": 340,
	"./km": 341,
	"./km.js": 341,
	"./kn": 342,
	"./kn.js": 342,
	"./ko": 343,
	"./ko.js": 343,
	"./ku": 344,
	"./ku.js": 344,
	"./ky": 345,
	"./ky.js": 345,
	"./lb": 346,
	"./lb.js": 346,
	"./lo": 347,
	"./lo.js": 347,
	"./lt": 348,
	"./lt.js": 348,
	"./lv": 349,
	"./lv.js": 349,
	"./me": 350,
	"./me.js": 350,
	"./mi": 351,
	"./mi.js": 351,
	"./mk": 352,
	"./mk.js": 352,
	"./ml": 353,
	"./ml.js": 353,
	"./mn": 354,
	"./mn.js": 354,
	"./mr": 355,
	"./mr.js": 355,
	"./ms": 356,
	"./ms-my": 357,
	"./ms-my.js": 357,
	"./ms.js": 356,
	"./mt": 358,
	"./mt.js": 358,
	"./my": 359,
	"./my.js": 359,
	"./nb": 360,
	"./nb.js": 360,
	"./ne": 361,
	"./ne.js": 361,
	"./nl": 362,
	"./nl-be": 363,
	"./nl-be.js": 363,
	"./nl.js": 362,
	"./nn": 364,
	"./nn.js": 364,
	"./pa-in": 365,
	"./pa-in.js": 365,
	"./pl": 366,
	"./pl.js": 366,
	"./pt": 367,
	"./pt-br": 368,
	"./pt-br.js": 368,
	"./pt.js": 367,
	"./ro": 369,
	"./ro.js": 369,
	"./ru": 370,
	"./ru.js": 370,
	"./sd": 371,
	"./sd.js": 371,
	"./se": 372,
	"./se.js": 372,
	"./si": 373,
	"./si.js": 373,
	"./sk": 374,
	"./sk.js": 374,
	"./sl": 375,
	"./sl.js": 375,
	"./sq": 376,
	"./sq.js": 376,
	"./sr": 377,
	"./sr-cyrl": 378,
	"./sr-cyrl.js": 378,
	"./sr.js": 377,
	"./ss": 379,
	"./ss.js": 379,
	"./sv": 380,
	"./sv.js": 380,
	"./sw": 381,
	"./sw.js": 381,
	"./ta": 382,
	"./ta.js": 382,
	"./te": 383,
	"./te.js": 383,
	"./tet": 384,
	"./tet.js": 384,
	"./tg": 385,
	"./tg.js": 385,
	"./th": 386,
	"./th.js": 386,
	"./tl-ph": 387,
	"./tl-ph.js": 387,
	"./tlh": 388,
	"./tlh.js": 388,
	"./tr": 389,
	"./tr.js": 389,
	"./tzl": 390,
	"./tzl.js": 390,
	"./tzm": 391,
	"./tzm-latn": 392,
	"./tzm-latn.js": 392,
	"./tzm.js": 391,
	"./ug-cn": 393,
	"./ug-cn.js": 393,
	"./uk": 394,
	"./uk.js": 394,
	"./ur": 395,
	"./ur.js": 395,
	"./uz": 396,
	"./uz-latn": 397,
	"./uz-latn.js": 397,
	"./uz.js": 396,
	"./vi": 398,
	"./vi.js": 398,
	"./x-pseudo": 399,
	"./x-pseudo.js": 399,
	"./yo": 400,
	"./yo.js": 400,
	"./zh-cn": 401,
	"./zh-cn.js": 401,
	"./zh-hk": 402,
	"./zh-hk.js": 402,
	"./zh-tw": 403,
	"./zh-tw.js": 403
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 641;

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //localStorage.removeItem('dispomed_uid')
            //localStorage.removeItem('dispomed_isofficine')
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[476]);
//# sourceMappingURL=main.js.map