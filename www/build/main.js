webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_request__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requests_requests__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ordonance_ordonance__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__current_current__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geocity_geocity__ = __webpack_require__(432);
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
        this.navCtrl = navCtrl;
        this.api = api;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.searchQuery = '';
        this.request = [];
        this.requestSent = this.api.reqSent;
        if (this.api.curReqkey) {
            //this.api.requestRestarter()
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__current_current__["a" /* CurrentPage */]);
        }
        else {
            this.api.setbadge(0);
        }
        /*
        this.api.afdb.object('dispomed_requests/' + this.api.curReqkey)
          .valueChanges()
          .subscribe((data: any) => {
            this.req = data;
          });
    */
    }
    HomePage.prototype.initializeItems = function () {
        this.items = this.api.druglist;
        /*this.items = [
          {'id':'1','name':'Paracetamol'},
          {'id':'2','name':'Viagra'},
        ];*/
    };
    HomePage.prototype.ionViewWillEnter = function () {
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.api.getLiveReqs();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        if (this.api.curReqkey) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__current_current__["a" /* CurrentPage */]);
        }
        this.api.getLiveReqs();
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
        this.searchQuery = null;
    };
    HomePage.prototype.rmMed = function (id) {
        this.request.splice(id, 1);
    };
    HomePage.prototype.sendRequest = function () {
        this.anwcount = 0;
        /*if (!this.api.user || !this.api.user.city) {
          this.api.promptVille(this.request)
        }
        else {
          this.api.sendRequest(this.request)
        }*/
        //this.navCtrl.setRoot(HomePage);
        this.api.newrequest.drugs = this.request;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__geocity_geocity__["a" /* GeocityPage */]);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n      <!--ion-buttons start="">\n          <button ion-button style="padding: 5px 12px;margin: 12px 19px;border-radius: 50%;background: silver;">\n              <ion-icon name="help"></ion-icon>\n          </button>\n      </ion-buttons-->\n    <ion-title>\n      &nbsp;DispoMed\n    </ion-title>\n    <ion-buttons end="">\n      <!--ion-chip style="margin-top: 10px" *ngIf="!api.isofficine">\n        <button ion-button="" (click)="goRequests()">\n          <ion-icon name="notifications" color="red"></ion-icon>\n        </button>\n        <ion-label>00 Requêtes</ion-label>\n      </ion-chip-->\n        <!--button *ngIf="request?.length>0" ion-button="" color="primary" icon-start="" round="">\n          <ion-icon name="search"></ion-icon>\n          <ion-badge class="animated infinite pulse" *ngIf="request?.length>0" color="danger">\n            {{request?.length || 0}}\n          </ion-badge>\n        </button-->\n        <button (click)="goRequests()" *ngIf="api.user?.isofficine" icon-start="" ion-button="" round="">\n            <ion-icon *ngIf="api.alertquests.length>0" class="animated infinite heartBeat" color="danger"\n                      name="notifications" style="border: solid red;border-radius: 50%;padding: 8px;"></ion-icon>\n            <ion-icon *ngIf="!api.alertquests?.length" color="primary" name="notifications"></ion-icon>\n            <ion-badge *ngIf="(api.alertquests?.length-api.alertquestsanwsered?.length)!=0" color="danger">\n                {{api.alertquests?.length - api.alertquestsanwsered?.length || 0}}\n            </ion-badge>\n      </button>\n\n      <button (click)="goProfile()" ion-button=""\n              style="padding: 5px 9px;margin: 12px 19px;border-radius: 50%;background: silver;">\n        <ion-icon name="person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="" text-center="">\n    <img *ngIf="!request.length" src="assets/imgs/logo.png" style="height: 128px; border-radius: 50%"\n         class="animated bounceIn">\n    <img *ngIf="request.length>0" src="assets/imgs/logo.png" style="height: 64px; border-radius: 50%"\n         class="animated bounceIn">\n    <h2 *ngIf="!request.length">DispoMed</h2>\n    <h6 *ngIf="request.length">{{request?.length || 0}} Elément(s)</h6>\n    <hr>\n    <!--div *ngIf="!api.reqSent"-->\n    <div>\n      <p *ngIf="request?.length>0">\n          <ion-chip *ngFor="let item of request ; let i = index">\n              <ion-icon name="close" color="circle" (click)="rmMed(i)"></ion-icon>\n              <ion-label *ngIf="item.image" (click)="showPhoto(item)">{{item?.name}}\n                  <ion-icon name="camera"></ion-icon>\n              </ion-label>\n              <ion-label *ngIf="!item.image">{{item?.name}}</ion-label>\n          </ion-chip>&nbsp;<br>\n          <button ion-button="" (click)="sendRequest()"> Envoyer</button>\n          <!--button *ngIf="!api.user?.city" ion-button="" small="" (click)="api.promptVille(request)"> Définissez votre ville</button-->\n      </p>\n    <p>\n        <!--ion-grid>\n          <ion-row>\n            <ion-col col-10="" col-auto="">\n            </ion-col>\n            <ion-col col-2="" col-auto="" style="padding-top: 13px">\n              <button ion-button="" (click)="takePicture()">\n                <ion-icon name="camera"></ion-icon>\n              </button>\n              <div>{{api.uploadPercent}}</div>\n            </ion-col>\n          </ion-row>\n        </ion-grid-->\n    </p>\n      <ion-list>\n          <ion-item *ngFor="let item of items" (click)="addMed(item)">\n              {{ item.name }}\n              <button ion-button="" item-end="" round="">\n                  <ion-icon name="checkmark"></ion-icon>\n              </button>\n          </ion-item>\n      </ion-list>\n        <p>\n          <ion-searchbar placeholder="Tapez ici le medicament" (ionInput)="getItems($event)"\n                         [(ngModel)]="searchQuery"></ion-searchbar>\n      </p>\n  </div>\n    <div text-center="" [innerHTML]="api.copyright"></div>\n    <!--div *ngIf="api.reqSent">\n        <h3 *ngIf="!api.curReq.countDownExpires">Veuillez patienter 5min,<br>les pharmacies les plus proches sont en train\n            de vérifier pour vous leur stocks.</h3>\n        <h3 *ngIf="api.curReq.countDownExpires">Votre requête reste encore active 1h pour que toutes les pharmacies\n            répondent\n            <--oubien cloturer la requete maintenant-></h3>\n        <h1 *ngIf="!api.curReq.countDownExpires">{{api.curReq.countDown}}</h1>\n        <h1 *ngIf="api.curReq.countDownExpires">{{api.curReq.countDownHour}}</h1>\n      <button class="animated infinite pulse" *ngIf="!api.curReq.countDownExpires" ion-button="" round="" clear=""\n              strong="" large="">\n        {{api.countObj(req?.answers) || "0"}} Réponse(s)\n      </button>\n      <div *ngIf="api.curReq.countDownExpires">\n        <button class="animated infinite pulse" ion-button="" round="" strong="" large="" (click)="goRequest()">\n          {{api.countObj(req?.answers) || "0"}} Réponse(s)\n        </button>\n        <br>\n      </div>\n      <div>\n        <h3>Les médicaments recherchés:</h3>\n        <ion-chip *ngFor="let item of api.curReq?.drugs">\n          <--ion-icon name="close" color="circle"></ion-icon->\n          <ion-label *ngIf="item.image" (click)="showPhoto(item)">{{item?.name}}\n            <ion-icon name="camera"></ion-icon>\n          </ion-label>\n          <ion-label *ngIf="!item.image">{{item?.name}}</ion-label>\n        </ion-chip>&nbsp;\n      </div>\n      <div>\n        <p>&nbsp;</p>\n        <hr>\n        <button ion-button="" color="danger" round="" small="" (click)="api.closeRequest()">Annuler la recherche</button>\n      </div>\n\n    </div-->\n</ion-content>\n<!--ion-footer *ngIf="items">\n    <ion-toolbar>\n        <ion-searchbar placeholder="Tapez ici le medicament" (ionInput)="getItems($event)"\n                       [(ngModel)]="searchQuery" autofocus=""></ion-searchbar>\n    </ion-toolbar>\n</ion-footer-->\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/home/home.html"*/,
            providers: [[__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmahome_pharmahome__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historyreq_historyreq__ = __webpack_require__(430);
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
        if (!this.api.user) {
            this.api.user = {};
        }
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
            selector: 'page-profile',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mon compte</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center="">\n    <ion-icon *ngIf="api.isofficine" name="home" style="font-size: 7em"></ion-icon>\n    <ion-icon *ngIf="!api.isofficine" name="person" style="font-size: 7em"></ion-icon>\n    <h3>{{api?.user?.name || \'Nom & Prénoms\'}}</h3>\n    <strong *ngIf="api.isofficine">{{api?.user?.pharmacy?.denomination}}</strong>\n  </div>\n  <div text-center="" *ngIf="!history">\n    <h1>&nbsp;</h1>\n    <ion-list *ngIf="!api?.user?.isofficine">\n      <ion-item>\n        <ion-label color="primary" stacked>Nom & prénom(s)</ion-label>\n        <ion-input type="text" placeholder="Votre nom complet" [(ngModel)]="api.user.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Téléphone</ion-label>\n        <ion-input type="tel" placeholder="Votre numéro de téléphone" [(ngModel)]="api.user.phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Ville</ion-label>\n        <ion-select [(ngModel)]="api.user.city">\n          <ion-option [value]="api?.user?.city">{{api?.user?.city?.name}}</ion-option>\n          <ion-option *ngFor="let item of api.towns" [value]="item">{{item?.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="api?.user?.isofficine">\n      <ion-item>\n        <ion-label color="primary" stacked>Nom préom(s)</ion-label>\n        <ion-input type="text" placeholder="Votre nom complet" [(ngModel)]="api.user.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Téléphone</ion-label>\n        <ion-input type="tel" placeholder="Votre numéro de téléphone" [(ngModel)]="api.user.phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Ville</ion-label>\n        <ion-select [(ngModel)]="api.user.city">\n          <ion-option [value]="api?.user?.city" selected>{{api?.user?.city?.name}}</ion-option>\n          <ion-option *ngFor="let item of api.towns" [value]="item">{{item?.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Pharmacie</ion-label>\n        <ion-select [(ngModel)]="api.user.pharmacy">\n          <ion-option [value]="api?.user?.pharmacy">{{api?.user?.pharmacy?.denomination}}</ion-option>\n          <ion-option *ngFor="let item of api.officines" [value]="item">{{item.denomination}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Le titulaire</ion-label>\n        <ion-input type="text" placeholder="Nom complet du titulaire" [(ngModel)]="api.user.owner"></ion-input>\n      </ion-item>\n      <ion-item>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button="" (click)="api.saveProfile(api.user)">Mettre a jour</button>\n    <button ion-button="" (click)="goHistory()">Historique</button>\n\n  </div>\n  <hr>\n  <div text-center="" *ngIf="history">\n    <h4>Historique</h4>\n    <ion-list>\n      <ion-item *ngFor="let item of api.myrequests" (click)="goRequest(item)">\n        <h2>{{item.drugs.length}} Médicaments</h2>\n        <p><span *ngFor="let med of item?.drugs">{{med?.name}} - </span></p>\n        <p> Le {{item.date | date:\'yyyy-M-dd\'}} à {{item.date | date:\'H:m\'}}</p>\n      </ion-item>\n    </ion-list>\n    <button ion-button="" (click)="goProfile()">Retour</button>\n  </div>\n  <div text-center="" *ngIf="!api.isofficine">\n    <h1>&nbsp;</h1>\n      <button ion-button="" color="danger" round="" (click)="welcomePharma()">Créer un compte pharmacien</button>\n  </div>\n  <div text-center="" [innerHTML]="api.copyright"></div>\n\n\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdonancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], OrdonancePage);
    return OrdonancePage;
}());

//# sourceMappingURL=ordonance.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmacy_pharmacy__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordonance_ordonance__ = __webpack_require__(109);
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
            selector: 'page-request',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/request/request.html"*/'<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>DispoMed</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div text-center="">\n    <h1 *ngIf="api.isofficine">Recherche de {{request?.client}}</h1>\n    <h1 *ngIf="!api.isofficine">Vos recherches du {{request?.date | date:\'dd/MM/yyyy\'}}</h1>\n      <!--h4 *ngIf="request?.clientphone">Contact:{{request?.clientphone}}<br></h4-->\n    <p *ngIf="!api.isofficine">{{api.countObj(request?.answers) || 00}} Réponses au total.</p>\n    <p *ngIf="api.isofficine">{{request?.date | date:\'dd/MM/yyyy\'}}</p>\n  </div>\n    <ion-list padding="" *ngIf="!api.isofficine" lines="">\n    <ion-item *ngFor="let drug of request?.drugs">\n      <h2 (click)="toggleAns(drug)">{{drug?.name}}</h2>\n        <ion-list no-lines="">\n          <ion-item *ngIf="!drug?.answers" item-end="">{{drug?.answers?.length || 0}} Réponses</ion-item>\n          <ion-item *ngFor="let ans of api.obj2arr(drug?.answers)">\n            <span>{{ans?.pharmacy.denomination}}</span>\n            <button item-end="" ion-button="" (click)="goPharma(ans)">Voir</button>\n          </ion-item>\n        </ion-list>\n    </ion-item>\n  </ion-list>\n    <ion-list padding="" *ngIf="api.isofficine && api.uid === request?.clientid" lines="">\n        <ion-item *ngFor="let drug of request?.drugs">\n            <h2 (click)="toggleAns(drug)">{{drug?.name}}</h2>\n            <ion-list no-lines="">\n                <ion-item *ngIf="!drug?.answers" item-end="">{{drug?.answers?.length || 0}} Réponses</ion-item>\n                <ion-item *ngFor="let ans of api.obj2arr(drug?.answers)">\n                    <span>{{ans?.pharmacy.denomination}}</span>\n                    <button item-end="" ion-button="" (click)="goPharma(ans)">Voir</button>\n                </ion-item>\n            </ion-list>\n        </ion-item>\n    </ion-list>\n    <ion-list padding="" *ngIf="api.isofficine && api.uid !== request?.clientid" lines="">\n    <ion-item *ngFor="let drug of request?.drugs; index as i">\n      <button ion-button="" *ngIf="drug.image" item-start="" (click)="showPhoto(drug)">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n      <h2 (click)="answer(request?.key, i)">{{drug?.name}}</h2>\n      <button *ngIf="api.dejaRep(drug)" item-end="" ion-button="" (click)="answer(request?.key, i)">\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n      <button *ngIf="!api.dejaRep(drug)" item-end="" ion-button="" color="danger" clear=""\n              (click)="answer(request?.key, i)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n    <!--p text-center="" *ngIf="request?.clientphone">\n      <button ion-button="" (click)="api.call(request.clientphone)">\n        <ion-icon name="call"></ion-icon> &nbsp; Appeler le client\n      </button>\n    </p-->\n    <div text-center="" [innerHTML]="api.copyright"></div>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
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
            selector: 'page-pharmacy',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/pharmacy/pharmacy.html"*/'<!--\n  Generated template for the PharmacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>&nbsp;</h1>\n  <div text-center="">\n    <h1>\n      <ion-icon name="home" style="font-size: 56px"></ion-icon>\n    </h1>\n    <h2>{{pharmacy?.pharmacy.denomination}}</h2>\n    <!--div><i>complétet avec les informations</i></div-->\n      <p>{{pharmacy?.pharmacy.commune}}<br/>{{pharmacy?.pharmacy.address}}</p>\n    <!--p>\n        <ion-icon name="call"></ion-icon>&nbsp;&nbsp;{{pharmacy?.pharmacy.contacts}}</p-->\n    <p>\n        <button *ngIf="pharmacy?.pharmacy?.latitude" ion-button="" (click)="api.locate(pharmacy?.pharmacy)">Itinéraire\n            sur carte\n        </button>\n      <button ion-button="" (click)="api.call(pharmacy?.pharmacy)">\n        <ion-icon name="call"></ion-icon>\n      </button>\n    </p>\n    <p>\n      <button ion-button="" clear="" (click)="dismiss()">Retour</button>\n    </p>\n  </div>\n    <div text-center="" [innerHTML]="api.copyright"></div>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/pharmacy/pharmacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], PharmacyPage);
    return PharmacyPage;
}());

//# sourceMappingURL=pharmacy.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_request__ = __webpack_require__(110);
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
            selector: 'page-requests',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/requests/requests.html"*/'<!--\n  Generated template for the RequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{api?.alertquests.length - api?.alertquestsanwsered?.length}} Requêtes en attente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of api.alertquests">\n      <ion-item (click)="goRequest(item)">\n        <ion-icon name="notifications" item-start=""></ion-icon>\n        <h2>{{item.client}}, {{item.drugs.length}} médicaments</h2>\n        <p><strong *ngFor="let d of item.drugs">{{d.name}},&nbsp; </strong></p>\n        <!--p>{{api.moment(item.date , "YYYYMMDD H:m:s").lang(\'fr\').fromNow()}}</p-->\n        <p>{{item.date | date:\'dd/MM/yyyy\'}} à {{item.date | date:\'H:m\'}}</p>\n        <ion-icon *ngIf="api.dejaRep(item)" name="checkmark" item-end="" color="primary"></ion-icon>\n\n      </ion-item>\n      <!--ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Email\n        </button>\n      </ion-item-options-->\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/requests/requests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], RequestsPage);
    return RequestsPage;
}());

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 233:
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
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		734,
		0
	],
	"../pages/current/current.module": [
		276
	],
	"../pages/geocity/geocity.module": [
		434
	],
	"../pages/historyreq/historyreq.module": [
		435
	],
	"../pages/ordonance/ordonance.module": [
		436
	],
	"../pages/pharmacy/pharmacy.module": [
		437
	],
	"../pages/pharmahome/pharmahome.module": [
		438
	],
	"../pages/profile/profile.module": [
		439
	],
	"../pages/request/request.module": [
		440
	],
	"../pages/requests/requests.module": [
		441
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
webpackAsyncContext.id = 275;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPageModule", function() { return CurrentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CurrentPageModule = /** @class */ (function () {
    function CurrentPageModule() {
    }
    CurrentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__current__["a" /* CurrentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__current__["a" /* CurrentPage */]),
            ],
        })
    ], CurrentPageModule);
    return CurrentPageModule;
}());

//# sourceMappingURL=current.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_request__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requests_requests__ = __webpack_require__(173);
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
 * Generated class for the CurrentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrentPage = /** @class */ (function () {
    function CurrentPage(navCtrl, navParams, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        if (!this.api.curReqkey) {
            //this.api.requestRestarter()
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.api.afdb.object('dispomed_requests/' + this.api.curReqkey).valueChanges().subscribe(function (data) {
                _this.cr = data;
                var na = _this.api.countObj(data.answers);
                _this.api.setbadge(na);
                _this.api.notify(111, 'Vous avez ' + na + ' réponses');
            });
        }
        this.api.requestRestarter();
    }
    CurrentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentPage');
    };
    CurrentPage.prototype.cancelRequest = function () {
        this.api.closeRequest();
        this.api.curReqkey = null;
        localStorage.removeItem('dispomed_na');
        this.api.setbadge(0);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    CurrentPage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    CurrentPage.prototype.goRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__request_request__["a" /* RequestPage */], this.cr);
    };
    CurrentPage.prototype.goRequests = function () {
        if (this.api.user.isofficinevalidated == false) {
            this.api.showAlert('Votre compte pharmacien n\'est pas encore validée.', '');
            return false;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__requests_requests__["a" /* RequestsPage */]);
        }
    };
    CurrentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-current',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/current/current.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            &nbsp;DispoMed\n        </ion-title>\n        <ion-buttons end="">\n            <!--ion-chip style="margin-top: 10px" *ngIf="!api.isofficine">\n              <button ion-button="" (click)="goRequests()">\n                <ion-icon name="notifications" color="red"></ion-icon>\n              </button>\n              <ion-label>00 Requêtes</ion-label>\n            </ion-chip-->\n            <!--button *ngIf="request?.length>0" ion-button="" color="primary" icon-start="" round="">\n              <ion-icon name="search"></ion-icon>\n              <ion-badge class="animated infinite pulse" *ngIf="request?.length>0" color="danger">\n                {{request?.length || 0}}\n              </ion-badge>\n            </button-->\n            <button (click)="goRequests()" *ngIf="api.user?.isofficine" icon-start="" ion-button="" round="">\n                <ion-icon *ngIf="api.alertquests?.length>0" class="animated infinite heartBeat" color="danger"\n                          name="notifications" style="border: solid red;border-radius: 50%;padding: 8px"></ion-icon>\n                <ion-icon *ngIf="!api.alertquests?.length" color="primary" name="notifications"></ion-icon>\n                <ion-badge *ngIf="(api.alertquests?.length-api.alertquestsanwsered?.length)!=0" color="danger">\n                    {{api.alertquests?.length - api.alertquestsanwsered?.length || 0}}\n                </ion-badge>\n            </button>\n\n            <button (click)="goProfile()" ion-button=""\n                    style="padding: 5px 9px;margin: 12px 19px;border-radius: 50%;background: silver;">\n                <ion-icon name="person"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding="" text-center="">\n    <img src="assets/imgs/logo.png" style="height: 64px; border-radius: 50%" class="animated bounceIn">\n    <div *ngIf="api.reqSent">\n        <h3 *ngIf="!api.curReq.countDownExpires">Les pharmacies les plus proches (de {{cr?.city?.name}}) vérifient pour\n            vous leur stock.</h3>\n        <h3 *ngIf="api.curReq.countDownExpires">Votre requête reste encore active 1h pour que toutes les pharmacies\n            répondent\n            <!--oubien cloturer la requete maintenant--></h3>\n        <h5>&nbsp;</h5>\n        <span>Veuillez patienter ...</span>\n        <h5 *ngIf="!api.curReq.countDownExpires">{{api.curReq.countDown}}</h5>\n        <h5 *ngIf="api.curReq.countDownExpires">{{api.curReq.countDownHour}}</h5>\n        <button class="animated infinite pulse" *ngIf="!api.curReq.countDownExpires" ion-button="" round="" clear=""\n                strong="" large=""> Vous avez reçu <br>\n            {{api.countObj(cr?.answers) || "0"}} Réponse(s)\n        </button>\n        <div *ngIf="api.curReq.countDownExpires">\n            <button class="animated infinite pulse" ion-button="" round="" strong="" large="" (click)="goRequest()">\n                Vous avez reçu <br>\n                {{api.countObj(cr?.answers) || "0"}} Réponse(s)\n            </button>\n            <br>\n        </div>\n        <div>\n            <h3>&nbsp;</h3>\n            <p>Voici la liste des médicaments que vous avez rechercher:</p>\n            <ion-chip *ngFor="let item of api.curReq?.drugs">\n                <!--ion-icon name="close" color="circle"></ion-icon-->\n                <ion-label *ngIf="item.image" (click)="showPhoto(item)">{{item?.name}}\n                    <ion-icon name="camera"></ion-icon>\n                </ion-label>\n                <ion-label *ngIf="!item.image">{{item?.name}}</ion-label>\n            </ion-chip>&nbsp;\n        </div>\n        <div>\n            <p>&nbsp;</p>\n            <hr>\n            <button ion-button="" color="danger" round="" small="" (click)="cancelRequest()">Annuler la recherche\n            </button>\n        </div>\n\n    </div>\n    <div text-center="" [innerHTML]="api.copyright"></div>\n\n\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/current/current.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], CurrentPage);
    return CurrentPage;
}());

//# sourceMappingURL=current.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__ = __webpack_require__(428);
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
    function ApiProvider(badge, localNotifications, http, loadingCtrl, toastCtrl, alertCtrl, afdb) {
        var _this = this;
        this.badge = badge;
        this.localNotifications = localNotifications;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.afdb = afdb;
        this.copyright = '<p><small>&copy; Dr Horus Dogue | Réalisé par <a href="http://it-num.bj" target="_system">IT-NUM</a></small></p>';
        this.newrequest = {};
        this.reqSent = false;
        this.countDownExpires = false;
        this.livecurReqkey = false;
        this.gmapUrl = 'https://www.google.com/maps/search/?api=1&query=';
        //gmapUrl: any = 'https://www.google.com/maps/@';
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
                _this.user = { name: 'anonymous', city: '' };
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
        this.getLiveReqs();
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
        this.http.get('assets/data/officinetown.json')
            .subscribe(function (data) {
            _this.officinetown = data;
            //console.dir(this.druglist);
        });
    }
    ApiProvider.prototype.getLiveReqs = function () {
        var _this = this;
        if (this.isofficine) {
            this.afdb.list('dispomed_requests/', function (ref) { return ref.orderByChild('expire').equalTo(false); })
                .valueChanges()
                .subscribe(function (data) {
                if (!data.city) {
                    data.city = { name: 'nulle', id: 999999999 };
                }
                if (!_this.user.city) {
                    _this.user.city = { name: 'nulle', id: 9999999999 };
                }
                _this.alertquests = data.filter(function (r) { return r.city.id == _this.user.city.id; });
                _this.alertquestsanwsered = _this.alertquests.filter(function (s) { return _this.dejaRep(s) == true; });
                var an = _this.alertquests.length - _this.alertquestsanwsered.length;
                _this.badge.clear();
                _this.badge.set(an);
                if (_this.alertquestsanwsered) {
                    var lan = localStorage.getItem('dispomed_lan') ? localStorage.getItem('dispomed_lan') : 0;
                    if (an > lan) {
                        _this.localNotifications.schedule({
                            id: 2,
                            text: an + ' Nouvelles requête',
                        });
                    }
                }
                //console.log(this.alertquests.length - this.alertquestsanwsered.length)
            });
        }
    };
    ApiProvider.prototype.getCurrentRequest = function () {
        return this.curReq;
    };
    ApiProvider.prototype.localNotif = function (message) {
        this.localNotifications.schedule({
            id: Math.floor(Math.random() * Math.floor(1000)),
            text: message,
        });
    };
    ApiProvider.prototype.sendRequest = function () {
        var _this = this;
        var result = false;
        this.curReq = this.newrequest;
        //this.curReq.drugs = request;
        this.curReq.client = this.user.name ? this.user.name : 'ananymous';
        this.curReq.clientphone = this.user.phone ? this.user.phone : '';
        this.curReq.clientid = this.uid;
        this.curReq.answers = [];
        this.curReq.expire = false;
        //this.curReq.city = this.tempcity ? this.tempcity : this.user.city.id;
        this.curReq.date = Date.now();
        /*let loading = this.loadingCtrl.create({
          content: 'Envoi en cours ...'
        });
    
        loading.present();*/
        //this.requestTimer()
        //this.curReq = r;
        localStorage.setItem('dispomed_cureq', JSON.stringify(this.curReq));
        //////////////////////////////////////////////////////////////////////////////////////
        var list = this.afdb.list('dispomed_requests');
        list.push(this.curReq).then(function (e) {
            _this.curReqkey = e.key;
            localStorage.setItem('dispomed_curReqkey', e.key);
            //setTimeout(() => {
            //loading.dismiss();
            _this.curReqkey = e.key;
            localStorage.setItem('dispomed_curReqkey', e.key);
            _this.afdb.object('dispomed_requests/' + _this.curReqkey).update({ 'key': _this.curReqkey });
            _this.curafdbReq = _this.afdb.object('dispomed_requests/' + _this.curReqkey).valueChanges();
            //this.afdb.object('dispomed_requests/' + this.curReqkey + '/client/' + [this.uid]).set(true)
            //}, 2000);
            //
            _this.reqSent = true;
            localStorage.setItem('dispomed_reqsent', 'true');
        }).then(function (e) {
            //setTimeout(() => {
            //loading.dismiss();
            //},3000)
            //window.location.reload()
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
                            _this.sendRequest();
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
                        //this.afdb.object('dispomed_requests/' + rkey + '/answers/' + [this.uid]).remove();
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
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    ApiProvider.prototype.dissmissloading = function () {
        this.loading.dismiss();
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
        if (this.user.name && this.user.phone && this.user.city) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Modifications en cours'
            });
            loading_1.present().then(function (data) {
                _this.afdb.object('dispomed_users/' + _this.uid).update(user).then(function (data) {
                    loading_1.dismiss();
                });
            });
        }
        else {
            this.showAlert('', 'Veuillez remplir tous les champs du formulaire.');
        }
    };
    ApiProvider.prototype.call = function (item) {
        window.open('tel://' + item.contacts, '_system');
    };
    ApiProvider.prototype.locate = function (item) {
        //@TODO integrer inappbrowser
        window.open(this.gmapUrl + item.latitude + ',' + item.longitude, '_system');
        //console.log(item.geo)
    };
    ApiProvider.prototype.closeRequest = function () {
        var loading = this.loadingCtrl.create({
            content: 'Annulation en cours ...'
        });
        loading.present();
        this.curReq.closed = true;
        this.reqSent = false;
        this.myrequests.push(this.curReq);
        this.afdb.object('dispomed_users/' + this.uid + '/requests/').update((_a = {}, _a[this.curReqkey] = true, _a));
        this.afdb.object('dispomed_requests/' + this.curReqkey).update({ 'expire': true });
        this.curReqkey = null;
        localStorage.removeItem('dispomed_curReqkey');
        localStorage.removeItem('dispomed_reqsent');
        localStorage.removeItem('dispomed_cureq');
        return loading.dismiss();
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
    ApiProvider.prototype.setbadge = function (i) {
        this.badge.clear();
        this.badge.set(i);
    };
    ApiProvider.prototype.notify = function (id, message) {
        this.localNotifications.schedule({
            id: id,
            text: message,
        });
    };
    ApiProvider.prototype.registerToken = function (token) {
        localStorage.setItem('dispomed_fcm_token', token);
        this.fcm_token = token;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__["a" /* Badge */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmahomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(107);
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
        this.pharm = this.api.user ? this.api.user : {};
        this.officines = this.api.officines;
        this.towns = this.api.officinetown;
        this.fofficines = [];
    }
    PharmahomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PharmahomePage');
    };
    PharmahomePage.prototype.register = function () {
        if (this.pharm.name && this.pharm.phone && this.pharm.pharmacy) {
            this.api.registerPharm(this.pharm);
            var that_1 = this;
            setTimeout(function () {
                //that.navCtrl.setRoot(HomePage);
                //that.navCtrl.setRoot(CurrentPage);
                window.location.reload();
                that_1.api.dissmissloading();
            }, 3000);
        }
        else {
            this.api.showAlert('', 'Veuillez remplir tous les champs du formulaire.');
        }
    };
    PharmahomePage.prototype.cancel = function () {
        this.pharm = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    PharmahomePage.prototype.gohome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    PharmahomePage.prototype.filterOfficines = function (city) {
        //console.log(city)
        var x = this.officines.filter(function (item) {
            //return (item.commune.toLowerCase().indexOf(city.name.toLowerCase()) > -1);
            return item.commune == city.name;
        });
        this.fofficines = x;
    };
    PharmahomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pharmahome',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/pharmahome/pharmahome.html"*/'<!--\n  Generated template for the PharmahomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--ion-header>\n\n  <ion-navbar>\n    <ion-title>pharmahome</ion-title>\n  </ion-navbar>\n\n</ion-header-->\n\n\n<ion-content padding="" text-center="">\n  <div style="height: 5vh"></div>\n  <img src="assets/imgs/logo.png" style="height: 128px; border-radius: 50%">\n  <h2>DispoMed</h2>\n  <div *ngIf="!api.isofficine">\n    <p>Veuillez remplir le formulaire suivant pour créer votre compte pharmacien.</p>\n    <ion-list inset="">\n      <ion-item>\n        <ion-label color="primary" stacked>Nom & prénom(s)</ion-label>\n        <ion-input [(ngModel)]="pharm.name" placeholder="Nom préom(s)" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Téléphone</ion-label>\n        <ion-input [(ngModel)]="pharm.phone" placeholder="Téléphone" type="tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Ville</ion-label>\n        <ion-select (ngModelChange)="filterOfficines($event)" [(ngModel)]="pharm.city">\n          <ion-option *ngFor="let item of towns" [value]="item">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Pharmacie</ion-label>\n        <ion-select [(ngModel)]="pharm.pharmacy">\n            <ion-option *ngFor="let item of fofficines" [value]="item">{{item.denomination}}</ion-option>\n        </ion-select>\n      </ion-item>\n        <!--ion-item>\n            <ion-searchbar placeholder="Tapez ici votre ville actuelle" (ionInput)="getItems($event)"></ion-searchbar>\n        </ion-item-->\n      <ion-item>\n        <ion-label color="primary" stacked>Nom complet du titulaire</ion-label>\n        <ion-input [(ngModel)]="pharm.owner" placeholder="Nom complet du titulaire" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n      </ion-item>\n    </ion-list>\n    <button ion-button="" (click)="register()">Enregistrer</button>\n    <button ion-button="" (click)="cancel()" clear="">Annuler</button>\n  </div>\n  <div *ngIf="api.isofficine">\n    <p>Votre requete sera soumis à approvation dans un délais de 6h maximum</p>\n    <button ion-button="" (click)="gohome()">Continuer</button>\n\n  </div>\n  <div [innerHTML]="api.copyright" text-center=""></div>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/pharmahome/pharmahome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], PharmahomePage);
    return PharmahomePage;
}());

//# sourceMappingURL=pharmahome.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryreqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmacy_pharmacy__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordonance_ordonance__ = __webpack_require__(109);
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
            selector: 'page-historyreq',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/historyreq/historyreq.html"*/'<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Requête</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div text-center="">\n    <h1 *ngIf="api.isofficine">Requete de {{request.client}}</h1>\n    <h4>Requete du {{request.date | date:\'yyy/MM/dd\'}}</h4>\n    <p *ngIf="!api.isofficine">{{api.countObj(request.answers) || 00}} Réponses au total.</p>\n  </div>\n  <ion-list padding="" *ngIf="!api.isofficine">\n    <ion-item *ngFor="let drug of request.drugs">\n      <button ion-button="" *ngIf="drug.image" item-start="" (click)="showPhoto(drug)">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n      <h2 (click)="toggleAns(drug)">{{drug?.name}}</h2>\n      <div *ngIf="!drug?.answers" item-end="">{{drug?.answers?.length || 0}} Réponses</div>\n      <div *ngIf="drug?.answers">\n        <ion-list>\n          <ion-item *ngFor="let ans of api.obj2arr(drug?.answers)">\n            <h3>{{ans?.pharmacy.denomination}}</h3>\n            <button item-end="" ion-button="" (click)="goPharma(ans)">Voir</button>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-list padding="" *ngIf="api.isofficine">\n    <ion-item *ngFor="let drug of request.drugs; index as i">\n      <h2>{{drug?.name}}</h2>\n      <!--button item-end="" ion-button="" (click)="answer(request.key, i)">Répondre</button-->\n    </ion-item>\n  </ion-list>\n    <div text-center="" [innerHTML]="api.copyright"></div>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/historyreq/historyreq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HistoryreqPage);
    return HistoryreqPage;
}());

//# sourceMappingURL=historyreq.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(108);
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
 * Generated class for the GeocityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeocityPage = /** @class */ (function () {
    function GeocityPage(navCtrl, navParams, geolocation, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.api = api;
        this.geo = {};
        this.geo = {};
        if (this.api.user && this.api.user.city) {
            this.api.newrequest.city = this.api.user.city;
        }
        else {
            this.api.newrequest.city = '';
        }
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            _this.geo.timesamp = resp.timestamp;
            _this.geo.latitude = resp.coords.latitude;
            _this.geo.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        /*
        this.geolocation.watchPosition().subscribe((data:any) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            alert(JSON.stringify(data))
            this.geo.timesamp = data.timestamp;
            this.geo.latitude = data.coords.latitude;
            this.geo.longitude = data.coords.longitude;

        });*/
    }
    GeocityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeocityPage');
    };
    GeocityPage.prototype.initializeItems = function () {
        this.items = this.api.towns;
    };
    GeocityPage.prototype.sendRequest = function () {
        this.api.presentLoading('Envoi de la requête');
        this.api.livecurReqkey = true;
        this.api.newrequest.geo = this.geo;
        this.api.sendRequest();
        var that = this;
        setTimeout(function () {
            //that.navCtrl.setRoot(HomePage);
            //that.navCtrl.setRoot(CurrentPage);
            window.location.reload();
            that.api.dissmissloading();
        }, 3000);
    };
    GeocityPage.prototype.goAway = function () {
    };
    GeocityPage.prototype.setcity = function (city) {
        this.api.newrequest.city = city;
    };
    GeocityPage.prototype.getItems = function (ev) {
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
    GeocityPage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    GeocityPage.prototype.rmcity = function () {
        this.api.newrequest.city = null;
    };
    GeocityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geocity',template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/geocity/geocity.html"*/'<!--\n  Generated template for the GeocityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            &nbsp;DispoMed\n        </ion-title>\n        <ion-buttons end="">\n            <!--ion-chip style="margin-top: 10px" *ngIf="!api.isofficine">\n              <button ion-button="" (click)="goRequests()">\n                <ion-icon name="notifications" color="red"></ion-icon>\n              </button>\n              <ion-label>00 Requêtes</ion-label>\n            </ion-chip-->\n            <button (click)="goProfile()" ion-button=""\n                    style="padding: 5px 9px;margin: 12px 19px;border-radius: 50%;background: silver;">\n                <ion-icon name="person"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding="" text-center="">\n    <img src="assets/imgs/logo.png" style="height: 96px; border-radius: 50%" class="animated bounceIn">\n    <h2>Localisation</h2>\n    <hr>\n\n    <div *ngIf="!geo">\n        Récupération de vos coordonnées géolocalisés en cours ....\n    </div>\n    <div *ngIf="geo">\n        <ion-chip>\n            <ion-label>Coordonnées récupérés</ion-label>\n            <ion-icon name="locate"></ion-icon>\n        </ion-chip>&nbsp;&nbsp;\n    </div>\n\n    <div *ngIf="api.newrequest.city">\n        <ion-chip>\n            <ion-label>{{api.newrequest.city?.name}}</ion-label>\n            <ion-icon name="close" (click)="rmcity(city)"></ion-icon>\n        </ion-chip>&nbsp;&nbsp;\n    </div>\n\n    <p *ngIf="!api.newrequest.city">\n        <ion-chip *ngFor="let item of items ; let i = index" (click)="setcity(item)">\n            <ion-label>{{item?.name}}</ion-label>\n            <ion-icon name="checkmark" (click)="setcity(item)"></ion-icon>\n        </ion-chip>&nbsp;&nbsp;&nbsp;&nbsp;\n    </p>\n\n    <div *ngIf="!api.newrequest.city">\n        <ion-searchbar placeholder="Tapez ici votre ville actuelle" (ionInput)="getItems($event)"></ion-searchbar>\n    </div>\n    <h4>&nbsp;</h4>\n    <button ion-button="" (click)="sendRequest()"> Terminer</button>\n</ion-content>\n\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/pages/geocity/geocity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], GeocityPage);
    return GeocityPage;
}());

//# sourceMappingURL=geocity.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocityPageModule", function() { return GeocityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geocity__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeocityPageModule = /** @class */ (function () {
    function GeocityPageModule() {
    }
    GeocityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__geocity__["a" /* GeocityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geocity__["a" /* GeocityPage */]),
            ],
        })
    ], GeocityPageModule);
    return GeocityPageModule;
}());

//# sourceMappingURL=geocity.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryreqPageModule", function() { return HistoryreqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historyreq__ = __webpack_require__(430);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historyreq__["a" /* HistoryreqPage */]),
            ],
        })
    ], HistoryreqPageModule);
    return HistoryreqPageModule;
}());

//# sourceMappingURL=historyreq.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdonancePageModule", function() { return OrdonancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordonance__ = __webpack_require__(109);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ordonance__["a" /* OrdonancePage */]),
            ],
        })
    ], OrdonancePageModule);
    return OrdonancePageModule;
}());

//# sourceMappingURL=ordonance.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyPageModule", function() { return PharmacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pharmacy__ = __webpack_require__(172);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pharmacy__["a" /* PharmacyPage */]),
            ],
        })
    ], PharmacyPageModule);
    return PharmacyPageModule;
}());

//# sourceMappingURL=pharmacy.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmahomePageModule", function() { return PharmahomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pharmahome__["a" /* PharmahomePage */]),
            ],
        })
    ], PharmahomePageModule);
    return PharmahomePageModule;
}());

//# sourceMappingURL=pharmahome.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(108);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(110);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */]),
            ],
        })
    ], RequestPageModule);
    return RequestPageModule;
}());

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageModule", function() { return RequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requests__ = __webpack_require__(173);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__requests__["a" /* RequestsPage */]),
            ],
        })
    ], RequestsPageModule);
    return RequestsPageModule;
}());

//# sourceMappingURL=requests.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_module__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_request_request_module__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pharmahome_pharmahome_module__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pharmacy_pharmacy_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_requests_requests_module__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_database__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_historyreq_historyreq_module__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ordonance_ordonance_module__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_local_notifications__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_current_current_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_geocity_geocity_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_badge__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_background_mode__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_fcm__ = __webpack_require__(484);
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
                __WEBPACK_IMPORTED_MODULE_20__pages_current_current_module__["CurrentPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_geocity_geocity_module__["GeocityPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire__["a" /* AngularFireModule */].initializeApp(environment.firebase),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/current/current.module#CurrentPageModule', name: 'CurrentPage', segment: 'current', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geocity/geocity.module#GeocityPageModule', name: 'GeocityPage', segment: 'geocity', priority: 'low', defaultHistory: [] },
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_badge__["a" /* Badge */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_badge__["a" /* Badge */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_fcm__["a" /* FCM */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 279,
	"./af.js": 279,
	"./ar": 280,
	"./ar-dz": 281,
	"./ar-dz.js": 281,
	"./ar-kw": 282,
	"./ar-kw.js": 282,
	"./ar-ly": 283,
	"./ar-ly.js": 283,
	"./ar-ma": 284,
	"./ar-ma.js": 284,
	"./ar-sa": 285,
	"./ar-sa.js": 285,
	"./ar-tn": 286,
	"./ar-tn.js": 286,
	"./ar.js": 280,
	"./az": 287,
	"./az.js": 287,
	"./be": 288,
	"./be.js": 288,
	"./bg": 289,
	"./bg.js": 289,
	"./bm": 290,
	"./bm.js": 290,
	"./bn": 291,
	"./bn.js": 291,
	"./bo": 292,
	"./bo.js": 292,
	"./br": 293,
	"./br.js": 293,
	"./bs": 294,
	"./bs.js": 294,
	"./ca": 295,
	"./ca.js": 295,
	"./cs": 296,
	"./cs.js": 296,
	"./cv": 297,
	"./cv.js": 297,
	"./cy": 298,
	"./cy.js": 298,
	"./da": 299,
	"./da.js": 299,
	"./de": 300,
	"./de-at": 301,
	"./de-at.js": 301,
	"./de-ch": 302,
	"./de-ch.js": 302,
	"./de.js": 300,
	"./dv": 303,
	"./dv.js": 303,
	"./el": 304,
	"./el.js": 304,
	"./en-SG": 305,
	"./en-SG.js": 305,
	"./en-au": 306,
	"./en-au.js": 306,
	"./en-ca": 307,
	"./en-ca.js": 307,
	"./en-gb": 308,
	"./en-gb.js": 308,
	"./en-ie": 309,
	"./en-ie.js": 309,
	"./en-il": 310,
	"./en-il.js": 310,
	"./en-nz": 311,
	"./en-nz.js": 311,
	"./eo": 312,
	"./eo.js": 312,
	"./es": 313,
	"./es-do": 314,
	"./es-do.js": 314,
	"./es-us": 315,
	"./es-us.js": 315,
	"./es.js": 313,
	"./et": 316,
	"./et.js": 316,
	"./eu": 317,
	"./eu.js": 317,
	"./fa": 318,
	"./fa.js": 318,
	"./fi": 319,
	"./fi.js": 319,
	"./fo": 320,
	"./fo.js": 320,
	"./fr": 321,
	"./fr-ca": 322,
	"./fr-ca.js": 322,
	"./fr-ch": 323,
	"./fr-ch.js": 323,
	"./fr.js": 321,
	"./fy": 324,
	"./fy.js": 324,
	"./ga": 325,
	"./ga.js": 325,
	"./gd": 326,
	"./gd.js": 326,
	"./gl": 327,
	"./gl.js": 327,
	"./gom-latn": 328,
	"./gom-latn.js": 328,
	"./gu": 329,
	"./gu.js": 329,
	"./he": 330,
	"./he.js": 330,
	"./hi": 331,
	"./hi.js": 331,
	"./hr": 332,
	"./hr.js": 332,
	"./hu": 333,
	"./hu.js": 333,
	"./hy-am": 334,
	"./hy-am.js": 334,
	"./id": 335,
	"./id.js": 335,
	"./is": 336,
	"./is.js": 336,
	"./it": 337,
	"./it-ch": 338,
	"./it-ch.js": 338,
	"./it.js": 337,
	"./ja": 339,
	"./ja.js": 339,
	"./jv": 340,
	"./jv.js": 340,
	"./ka": 341,
	"./ka.js": 341,
	"./kk": 342,
	"./kk.js": 342,
	"./km": 343,
	"./km.js": 343,
	"./kn": 344,
	"./kn.js": 344,
	"./ko": 345,
	"./ko.js": 345,
	"./ku": 346,
	"./ku.js": 346,
	"./ky": 347,
	"./ky.js": 347,
	"./lb": 348,
	"./lb.js": 348,
	"./lo": 349,
	"./lo.js": 349,
	"./lt": 350,
	"./lt.js": 350,
	"./lv": 351,
	"./lv.js": 351,
	"./me": 352,
	"./me.js": 352,
	"./mi": 353,
	"./mi.js": 353,
	"./mk": 354,
	"./mk.js": 354,
	"./ml": 355,
	"./ml.js": 355,
	"./mn": 356,
	"./mn.js": 356,
	"./mr": 357,
	"./mr.js": 357,
	"./ms": 358,
	"./ms-my": 359,
	"./ms-my.js": 359,
	"./ms.js": 358,
	"./mt": 360,
	"./mt.js": 360,
	"./my": 361,
	"./my.js": 361,
	"./nb": 362,
	"./nb.js": 362,
	"./ne": 363,
	"./ne.js": 363,
	"./nl": 364,
	"./nl-be": 365,
	"./nl-be.js": 365,
	"./nl.js": 364,
	"./nn": 366,
	"./nn.js": 366,
	"./pa-in": 367,
	"./pa-in.js": 367,
	"./pl": 368,
	"./pl.js": 368,
	"./pt": 369,
	"./pt-br": 370,
	"./pt-br.js": 370,
	"./pt.js": 369,
	"./ro": 371,
	"./ro.js": 371,
	"./ru": 372,
	"./ru.js": 372,
	"./sd": 373,
	"./sd.js": 373,
	"./se": 374,
	"./se.js": 374,
	"./si": 375,
	"./si.js": 375,
	"./sk": 376,
	"./sk.js": 376,
	"./sl": 377,
	"./sl.js": 377,
	"./sq": 378,
	"./sq.js": 378,
	"./sr": 379,
	"./sr-cyrl": 380,
	"./sr-cyrl.js": 380,
	"./sr.js": 379,
	"./ss": 381,
	"./ss.js": 381,
	"./sv": 382,
	"./sv.js": 382,
	"./sw": 383,
	"./sw.js": 383,
	"./ta": 384,
	"./ta.js": 384,
	"./te": 385,
	"./te.js": 385,
	"./tet": 386,
	"./tet.js": 386,
	"./tg": 387,
	"./tg.js": 387,
	"./th": 388,
	"./th.js": 388,
	"./tl-ph": 389,
	"./tl-ph.js": 389,
	"./tlh": 390,
	"./tlh.js": 390,
	"./tr": 391,
	"./tr.js": 391,
	"./tzl": 392,
	"./tzl.js": 392,
	"./tzm": 393,
	"./tzm-latn": 394,
	"./tzm-latn.js": 394,
	"./tzm.js": 393,
	"./ug-cn": 395,
	"./ug-cn.js": 395,
	"./uk": 396,
	"./uk.js": 396,
	"./ur": 397,
	"./ur.js": 397,
	"./uz": 398,
	"./uz-latn": 399,
	"./uz-latn.js": 399,
	"./uz.js": 398,
	"./vi": 400,
	"./vi.js": 400,
	"./x-pseudo": 401,
	"./x-pseudo.js": 401,
	"./yo": 402,
	"./yo.js": 402,
	"./zh-cn": 403,
	"./zh-cn.js": 403,
	"./zh-hk": 404,
	"./zh-hk.js": 404,
	"./zh-tw": 405,
	"./zh-tw.js": 405
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
webpackContext.id = 650;

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(484);
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
    function MyApp(fcm, platform, statusBar, splashScreen, backgroundMode, api) {
        var _this = this;
        this.fcm = fcm;
        this.backgroundMode = backgroundMode;
        this.api = api;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            statusBar.overlaysWebView(false);
            //this.backgroundMode.enable();
            splashScreen.hide();
            //localStorage.removeItem('dispomed_uid')
            //localStorage.removeItem('dispomed_isofficine')
            _this.fcm.subscribeToTopic('dispomed');
            _this.fcm.getToken().then(function (token) {
                //backend.registerToken(token);
                alert(token);
            });
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log("Received in background");
                }
                else {
                    console.log("Received in foreground");
                }
                ;
            });
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                //backend.registerToken(token);
                alert(token);
            });
            //this.fcm.unsubscribeFromTopic('marketing');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/mnt/93b84ff7-4d6c-4c8f-bd9d-efea8dedc23e/upper/home/ubuntu/projects/dispomed/ionicBlank/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[485]);
//# sourceMappingURL=main.js.map