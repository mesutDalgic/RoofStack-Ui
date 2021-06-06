$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/JobApply.feature");
formatter.feature({
  "name": "RoofStack Is Basvuru Otomasyonu",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Lead Product Tester Is Basvurusu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Google’da \"Roof Stacks Yazılım\" seklinde arama yapilir",
  "keyword": "Given "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.google_da_seklinde_arama_yapilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sonuclar listesinden \"https://roofstacks.com\" adresine girilir",
  "keyword": "When "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.sonuclar_listesinden_adresine_girilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kariyer sayfasina gidilir",
  "keyword": "Then "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.kariyer_sayfasina_gidilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ilanlar arasindan Product pozisyonu secilir",
  "keyword": "And "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.ilanlar_arasindan_Product_pozisyonu_secilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lead Product Tester secilir",
  "keyword": "And "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.lead_Product_Tester_secilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Lead Product Tester\" sayfasinda sayfanin gelip gelmedigi, dogrulugu kontrol edilir",
  "keyword": "And "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.sayfasinda_sayfanin_gelip_gelmedigi_dogrulugu_kontrol_edilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SendCV butonuna basarak bir dosya upload edelim",
  "keyword": "And "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.sendcv_butonuna_basarak_bir_dosya_upload_edelim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eposta adresine e-mail adresinizi girelim",
  "keyword": "And "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.eposta_adresine_e_mail_adresinizi_girelim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sample bir dosya yukleyelim ve upload butonuna basarak dosyayi paylasalim",
  "keyword": "And "
});
formatter.match({
  "location": "RoofStack.StepDefinitions.ApplyStepDefs.Sample_bir_dosya_yukleyelim_ve_upload_butonuna_basarak_dosyayi_paylasalim()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});