var refrigeracionAppModule  = angular.module( 'lol', ['googlechart'] );

refrigeracionAppModule.controller( 'TurbinaController', turbinaController );

turbinaController.$inject = [ '$scope', '$timeout' ];
function turbinaController ( scope, timeout ) {
  scope.timer = 0;

  var data = {
    TemperaturaRotorCompresorDeBaja:   [{ label: 'U1RCB', value: 1 },
                                        { label: 'TgCB', value: 112.2 },
                                        { label: 'U2RCB', value: 1 },
                                        { label: 'TRTB', value: 1 },
                                        { label: 'U3RCB', value: .8 },
                                        { label: 'Tlub', value: 1 },
                                        { label: 'mRCB', value: 1.7500 },
                                        { label: 'CPmaterial', value: .502},
                                        { label: 'CITRCB' , value: 25}],

    TemperaturaCarcasaCompresorDeBaja: [{ label: 'U1CCB', value: 1 },
                                        { label: 'Tenf', value: 1 },
                                        { label: 'U2CCB', value: 1 },
                                        { label: 'TgCB', value: 112.2 },
                                        { label: 'mCCB', value: .5 },
                                        { label: 'CPmaterial', value: .502 },
                                        { label: 'CITCCB' , value: 25}],

    TemperaturaRotorCompresorDeAlta:   [{ label: 'U1RCA', value: 1 },
                                        { label: 'TgCA', value: 234 },
                                        { label: 'U2RCA', value: 1 },
                                        { label: 'TRTA', value: 1 },
                                        { label: 'U3RCA', value: .8 },
                                        { label: 'Tlub', value: 300 },
                                        { label: 'mRCA', value: .5 },
                                        { label: 'CPmaterial', value: .502 },
                                        { label: 'CITRCA' , value: 25}],

    TemperaturaCarcasaCompresorDeAlta: [{ label: 'U1CCA', value: 1 },
                                        { label: 'Tenf', value: 1 },
                                        { label: 'U2CCA', value: 1 },
                                        { label: 'TgCA', value: 234 },
                                        { label: 'mCCA', value: .5 },
                                        { label: 'CPmaterial', value: .502 },
                                        { label: 'CITCCA' , value: 25}],

    TemperaturaRotorTurbinaDeAlta:     [{ label: 'U1RTA', value: 1 },
                                        { label: 'TgTA', value: 864 },
                                        { label: 'U2RTA', value: 1 },
                                        { label: 'TRCA', value: 1 },
                                        { label: 'U3RTA', value: .8 },
                                        { label: 'Tlub', value: 300 },
                                        { label: 'U4RTA', value: 1 },
                                        { label: 'TgenfA', value: 908 },
                                        { label: 'mRTA', value: .5 },
                                        { label: 'CPmaterial', value: .502 },
                                        { label: 'CITRTA' , value: 25}],

    TemperaturaCarcasaTurbinaDeAlta:   [{ label: 'U1CTA', value: 1 },
                                        { label: 'Tenf', value: 1 },
                                        { label: 'U2CTA', value: 1 },
                                        { label: 'TgTA', value: 1100 },
                                        { label: 'mCTA', value: .5 },
                                        { label: 'CPmaterial', value: .502 },
                                        { label: 'CITCTA' , value: 25}],

    TemperaturaRotorTurbinaDeBaja:     [{ label: 'U1RTB', value: 1 },
                                        { label: 'TgTB', value: 864 },
                                        { label: 'U2RTB', value: 1 },
                                        { label: 'TRCB', value: 1 },
                                        { label: 'U3RTB', value: .8 },
                                        { label: 'Tlub', value: 300 },
                                        { label: 'U4RTB', value: 1 },
                                        { label: 'TgenfB', value: 908 },
                                        { label: 'mRTB', value: .51 },
                                        { label: 'CPmaterial', value: .502 },
                                        { label: 'CITRTB' , value: 25}],

    TemperaturaCarcasaTurbinaDeBaja:   [{ label: 'U1CTB', value: 1 },
                                        { label: 'Tenf', value: 1 },
                                        { label: 'U2CTB', value: 1 },
                                        { label: 'TgTB', value: 864 },
                                        { label: 'mCTB', value: .51 },
                                        { label: 'CPmaterial', value: .502 },
                                        { label: 'CITCTB' , value: 25}],

    TemperaturadeAireEnElHabitaculo:   [{ label: 'U1enf', value: 1 },
                                        { label: 'TCTB', value: 1 },
                                        { label: 'U2enf', value: 1 },
                                        { label: 'TCCB', value: 1 },
                                        { label: 'FMaire', value: 100 },
                                        { label: 'Tchiller', value: 30 },
                                        { label: 'U3enf', value: .1 },
                                        { label: 'TCTA', value: 1 },
                                        { label: 'U4enf', value: 1 },
                                        { label: 'TCCA', value: 1 },
                                        { label: 'menf', value: .51 },
                                        { label: 'CPaire', value: 1.010 },
                                        { label: 'CITenf' , value: 25}],

    NivelTanque:                       [{ label: 'Fin', value: 0.020 },
                                        { label: 'Fout', value: 0.021 },
                                        { label: 'Area', value: 3.4125 },
                                        { label: 'CITanque', value: 0.3881 },
                                        { label: 'signal' , value: 1}],

    TemperaturaTanque:                 [{ label: 'CITin_tanque', value: 70 },
                                        { label: 'FlujoMasico_ac', value: 10 },
                                        { label: 'CP_ac', value: 1.98 },
                                        { label: 'Temp_ac_in', value: 75 },
                                        { label: 'q_elect1', value: 0 },
                                        { label: 'Masa_ac_in' , value: 65}],

    PresionBomba:                      [{ label: 'ValMaxPre', value: 206 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CIPBomba', value: 0 },
                                        { label: 'signal' , value: 1}],

    FlujoBomba:                        [{ label: 'ValMaxFlujo', value: 0.021 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CIFBomba', value: 0 },
                                        { label: 'signal' , value: 1}],

    FlujoBombaBarrido:                 [{ label: 'ValMaxFlujoBarrido', value: 0.021 },
                                        { label: 'TaoBombaBarrido', value: 0.5 },
                                        { label: 'CIFBombaBarrido', value: 0 },
                                        { label: 'signal' , value: 1}],

    TempSalidaInter:                   [{ label: 'U_A_Tamb', value: .2 },
                                        { label: 'CP_ac2', value: 1.98 },
                                        { label: 'Tac_in', value: 600 },
                                        { label: 'CITemp_ac', value: 25 },
                                        { label: 'U_A', value: 190 },
                                        { label: 'Masa_ac_CP_ac2', value: 65 },
                                        { label: 'Densidad2', value: 690 },
                                        { label: 'signal' , value: 1},
                                        { label: 'CIBombadeabrrido' , value: 0}],

    Flujo_aire_carters:                [{ label: 'ValFlujo', value: 0.063 },
                                        { label: 'TaoFlujo', value: 0.5 },
                                        { label: 'CIFlujo', value: 0 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCA:                     [{ label: 'ValMaxTCA', value: 79.44 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CITCA', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCB:                     [{ label: 'ValMaxTCB', value: 86.11 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CITCB', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCC:                     [{ label: 'ValMaxTCC', value: 100 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CITCC', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCD:                     [{ label: 'ValMaxTCD', value: 89.44 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CITCD', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCE:                     [{ label: 'ValMaxTCE', value: 83.88 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CITCE', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaLUB:                    [{ label: 'ValMaxTLUB', value: 1 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CITLUB', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaTAGB:                   [{ label: 'ValMaxTAGB', value: 1 },
                                        { label: 'TaoBomba', value: 0.5 },
                                        { label: 'CITTAGB', value: 1 },
                                        { label: 'signal' , value: 1}],

    Outputs:                           [{ label: 'Temperatura Rotor Compresor De Baja', value: 0 },
                                        { label: 'Temperatura Carcasa Compresor De Baja', value: 0 },
                                        { label: 'Temperatura Rotor Compresor De Alta', value: 0 },
                                        { label: 'Temperatura Carcasa Compresor De Alta', value: 0 },
                                        { label: 'Temperatura Rotor Turbina De Alta', value: 0 },
                                        { label: 'Temperatura Carcasa Turbina De Alta', value: 0 },
                                        { label: 'Temperatura Rotor Turbina De Baja', value: 0 },
                                        { label: 'Temperatura Carcasa Turbina De Baja', value: 0 },
                                        { label: 'Temperatura De Aire En El Habitaculo', value: 0 },
                                        { label: 'Nivel Tanque', value: 0 },
                                        { label: 'Temperatura Tanque', value: 0 },
                                        { label: 'Presion Bomba', value: 0 },
                                        { label: 'Flujo Bomba', value: 0 },
                                        { label: 'Flujo Bomba Barrido', value: 0 },
                                        { label: 'Temp Salida Inter', value: 0 },
                                        { label: 'Flujo Aire Carters', value: 0 }],

    Table:                             [{ label: 'Temperatura Rotor Compresor De Baja', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura Carcasa Compresor De Baja', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura Rotor Compresor De Alta', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura Carcasa Compresor De Alta', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura Rotor Turbina De Alta', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura Carcasa Turbina De Alta', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura Rotor Turbina De Baja', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura Carcasa Turbina De Baja', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura De Aire En El Habitaculo', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Nivel Tanque', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temperatura Tanque', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Presion Bomba', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Flujo Bomba', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Flujo Bomba Barrido', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Temp Salida Inter', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 },
                                        { label: 'Flujo Aire Carters', value: 0 , value1: 0 ,value2: 0, value3: 0, value4: 0, value5: 0, value6: 0, value7: 0, value8: 0, value9: 0 }]
                                        //{ label: 'Temperatura LUB', value: 0 },
                                        //{ label: 'Temperatura TAGB', value: 0 }]
                                        //{ label: 'Temperatura CA', value: 0 },
                                        //{ label: 'Temperatura CB', value: 0 },
                                        //{ label: 'Temperatura CC', value: 0 },
                                        //{ label: 'Temperatura CD', value: 0 },
                                        //{ label: 'Temperatura CE', value: 0 },
  };

  scope.TemperaturaRotorCompresorDeBaja = data.TemperaturaRotorCompresorDeBaja;
  scope.TemperaturaRotorCompresorDeAlta = data.TemperaturaRotorCompresorDeAlta;
  scope.TemperaturaCarcasaCompresorDeBaja = data.TemperaturaCarcasaCompresorDeBaja;
  scope.TemperaturaCarcasaCompresorDeAlta = data.TemperaturaCarcasaCompresorDeAlta;
  scope.TemperaturaRotorTurbinaDeAlta = data.TemperaturaRotorTurbinaDeAlta;
  scope.TemperaturaCarcasaTurbinaDeAlta = data.TemperaturaCarcasaTurbinaDeAlta;
  scope.TemperaturaRotorTurbinaDeBaja = data.TemperaturaRotorTurbinaDeBaja;
  scope.TemperaturaCarcasaTurbinaDeBaja = data.TemperaturaCarcasaTurbinaDeBaja;
  scope.TemperaturadeAireEnElHabitaculo = data.TemperaturadeAireEnElHabitaculo;
  scope.NivelTanque = data.NivelTanque;
  scope.TemperaturaTanque = data.TemperaturaTanque;
  scope.PresionBomba = data.PresionBomba;
  scope.FlujoBomba = data.FlujoBomba;
  scope.FlujoBombaBarrido = data.FlujoBombaBarrido;
  scope.TempSalidaInter = data.TempSalidaInter;
  scope.Flujo_aire_carters = data.Flujo_aire_carters;
  scope.Table = data.Table;
  scope.outputvalue0 = "";

  //OUTPUTS
  scope.outputs = data.Outputs;

  var stop;
  scope.play = function () {

    /*console.log("Condiciones Nomales");
    for (var i = 0; i < 600; i++) {
        
      scope.timer++;
      scope.timer2--;
      calculus(scope);
    }
    for (var i = 0; i < 600; i++) {
      scope.timer++;
      calculus(scope);
    };
    condicionesIniciales( scope );
    
    scope.TemperaturadeAireEnElHabitaculo[5].value = 100;
    console.log("Chiller = 100");

    
    */
  
  //OUTPUTS

  //scope.outputs = data.Outputs;
    stop = timeout( function () {
      scope.timer++;
      calculus( scope );
      if( scope.timer > 9 ){
        timeout.cancel( stop );
      }
      scope.play();
    }, 1000)
  };

  scope.stop = function () {
    timeout.cancel( stop );
  }

  scope.selectedIndex = 0;

  scope.hover = function ( index ) {
    scope.selectedIndex = index;
  }

  var charsMockup = {
    "type": "LineChart",
    "displayed": true,
    "cssStyle": "height:600px; width:100%;",
    "data": {
      "cols": [
        {
          "id": "tiempo",
          "label": "Tiempo",
          "type": "string"
        },
        {
          "id": "c1",
          "label": "C1",
          "type": "number"
        }
      ],
      "rows": []
    },
    "options": {
      "title": "Temperatura Rotor Compresor De Baja",
      "isStacked": "true",
      "fill": 200,
      "displayExactValues": true,
      "vAxis": {
        "title": "Temperatura (C)",
        "gridlines": {
          "count": 10
        }
      },
      "hAxis": {
        "title": "Tiempo (s)"
      },
      "tooltip": {
        "isHtml": false
      }
    },
    "formatters": {}
  }
  scope.char = charsMockup;

  scope.chartReady = function () {
    fixGoogleChartsBarsBootstrap();
  }

  function fixGoogleChartsBarsBootstrap() {
      // Google charts uses <img height="12px">, which is incompatible with Twitter
      // * bootstrap in responsive mode, which inserts a css rule for: img { height: auto; }.
      // *
      // * The fix is to use inline style width attributes, ie <img style="height: 12px;">.
      // * BUT we can't change the way Google Charts renders its bars. Nor can we change
      // * the Twitter bootstrap CSS and remain future proof.
      // *
      // * Instead, this function can be called after a Google charts render to "fix" the
      // * issue by setting the style attributes dynamically.

      $(".google-visualization-table-table img[width]").each(function (index, img) {
          $(img).css("width", $(img).attr("width")).css("height", $(img).attr("height"));
      });
  };
}

function calculus ( scope ) {

  //LOL
    //TemperaturaTanque(CITin_tanque, FlujoMasico_ac, CP_ac, Temp_ac_in, q_elect1, Masa_ac_in );
    scope.outputs[10].value = TemperaturaTanque (
      scope.TemperaturaTanque[0].value,
      scope.TemperaturaTanque[1].value,
      scope.TemperaturaTanque[2].value,
      scope.TemperaturaTanque[3].value,
      scope.TemperaturaTanque[4].value,
      scope.TemperaturaTanque[5].value);

    scope.TemperaturaRotorCompresorDeBaja[5].value = scope.outputs[10].value;

    //TemperaturaRotorCompresorDeBaja(U1RCB, TCCB, U2RCB, TRTB, U3RCB, Tlub, mRCB, CPmaterial, CITRCB);
    scope.outputs[0].value = TemperaturaRotorCompresorDeBaja(
      scope.TemperaturaRotorCompresorDeBaja[0].value,
      scope.TemperaturaRotorCompresorDeBaja[1].value,
      scope.TemperaturaRotorCompresorDeBaja[2].value,
      scope.TemperaturaRotorCompresorDeBaja[3].value,
      scope.TemperaturaRotorCompresorDeBaja[4].value,
      scope.TemperaturaRotorCompresorDeBaja[5].value,
      scope.TemperaturaRotorCompresorDeBaja[6].value,
      scope.TemperaturaRotorCompresorDeBaja[7].value,
      scope.TemperaturaRotorCompresorDeBaja[8].value);

    scope.TemperaturaRotorTurbinaDeBaja[3].value = scope.outputs[0].value;

    //TemperaturaCarcasaCompresorDeBaja(U1CCB, Tenf, U2CCB, TgCB, mCCB, CPmaterial, CITCCB);
    scope.outputs[1].value = TemperaturaCarcasaCompresorDeBaja(
      scope.TemperaturaCarcasaCompresorDeBaja[0].value,
      scope.TemperaturaCarcasaCompresorDeBaja[1].value,
      scope.TemperaturaCarcasaCompresorDeBaja[2].value,
      scope.TemperaturaCarcasaCompresorDeBaja[3].value,
      scope.TemperaturaCarcasaCompresorDeBaja[4].value,
      scope.TemperaturaCarcasaCompresorDeBaja[5].value,
      scope.TemperaturaCarcasaCompresorDeBaja[6].value);

    scope.TemperaturadeAireEnElHabitaculo[3].value =  scope.outputs[1].value;
    scope.TemperaturaRotorCompresorDeAlta[5].value = /*(scope.TemperaturaRotorCompresorDeBaja[4].value * ( scope.outputs[0].value - scope.TemperaturaRotorCompresorDeBaja[5].value ) +*/ scope.TemperaturaRotorCompresorDeBaja[5].value;//);

    //TemperaturaRotorCompresorDeAlta(U1RCA, TCCA, U2RCA, TRTA, U3RCA, Tlub, mRCA, CPmaterial, CITRCA);
    scope.outputs[2].value = TemperaturaRotorCompresorDeAlta(
      scope.TemperaturaRotorCompresorDeAlta[0].value,
      scope.TemperaturaRotorCompresorDeAlta[1].value,
      scope.TemperaturaRotorCompresorDeAlta[2].value,
      scope.TemperaturaRotorCompresorDeAlta[3].value,
      scope.TemperaturaRotorCompresorDeAlta[4].value,
      scope.TemperaturaRotorCompresorDeAlta[5].value,
      scope.TemperaturaRotorCompresorDeAlta[6].value,
      scope.TemperaturaRotorCompresorDeAlta[7].value,
      scope.TemperaturaRotorCompresorDeAlta[8].value);

    scope.TemperaturaRotorTurbinaDeAlta[3].value = scope.outputs[2].value;

    //TemperaturaCarcasaCompresorDeAlta(U1CCA, Tenf, U2CCA, TgCA, mCCA, CPmaterial, CITCCA);
    scope.outputs[3].value = TemperaturaCarcasaCompresorDeAlta(
      scope.TemperaturaCarcasaCompresorDeAlta[0].value,
      scope.TemperaturaCarcasaCompresorDeAlta[1].value,
      scope.TemperaturaCarcasaCompresorDeAlta[2].value,
      scope.TemperaturaCarcasaCompresorDeAlta[3].value,
      scope.TemperaturaCarcasaCompresorDeAlta[4].value,
      scope.TemperaturaCarcasaCompresorDeAlta[5].value,
      scope.TemperaturaCarcasaCompresorDeAlta[6].value);

    scope.TemperaturadeAireEnElHabitaculo[9].value = scope.outputs[3].value;
    scope.TemperaturaRotorTurbinaDeAlta[5].value = (scope.TemperaturaRotorCompresorDeAlta[4].value * ( scope.outputs[2].value - scope.TemperaturaRotorCompresorDeAlta[5].value ) + scope.TemperaturaRotorCompresorDeAlta[5].value);

    //TemperaturaRotorTurbinaDeAlta(U1RTA, TgTA, U2RTA, TRCA, U3RTA, Tlub, U4RTA, TgenfA, mRTA, CPmaterial, CITRTA);
    scope.outputs[4].value = TemperaturaRotorTurbinaDeAlta (
      scope.TemperaturaRotorTurbinaDeAlta[0].value,
      scope.TemperaturaRotorTurbinaDeAlta[1].value,
      scope.TemperaturaRotorTurbinaDeAlta[2].value,
      scope.TemperaturaRotorTurbinaDeAlta[3].value,
      scope.TemperaturaRotorTurbinaDeAlta[4].value,
      scope.TemperaturaRotorTurbinaDeAlta[5].value,
      scope.TemperaturaRotorTurbinaDeAlta[6].value,
      scope.TemperaturaRotorTurbinaDeAlta[7].value,
      scope.TemperaturaRotorTurbinaDeAlta[8].value,
      scope.TemperaturaRotorTurbinaDeAlta[9].value,
      scope.TemperaturaRotorTurbinaDeAlta[10].value);

    scope.TemperaturaRotorCompresorDeAlta[3].value = scope.outputs[4].value;

    //TemperaturaCarcasaTurbinaDeAlta(U1CTA, Tenf, U2CTA, TgTA, mCTA, CPmaterial, CITCTA);
    scope.outputs[5].value = TemperaturaCarcasaTurbinaDeAlta (
      scope.TemperaturaCarcasaTurbinaDeAlta[0].value,
      scope.TemperaturaCarcasaTurbinaDeAlta[1].value,
      scope.TemperaturaCarcasaTurbinaDeAlta[2].value,
      scope.TemperaturaCarcasaTurbinaDeAlta[3].value,
      scope.TemperaturaCarcasaTurbinaDeAlta[4].value,
      scope.TemperaturaCarcasaTurbinaDeAlta[5].value,
      scope.TemperaturaCarcasaTurbinaDeAlta[6].value);

    scope.TemperaturadeAireEnElHabitaculo[7].value = scope.outputs[5].value;
    scope.TemperaturaRotorTurbinaDeBaja[5].value = (scope.TemperaturaRotorTurbinaDeAlta[4].value * ( scope.outputs[4].value - scope.TemperaturaRotorTurbinaDeAlta[5].value ) + scope.TemperaturaRotorTurbinaDeAlta[5].value);

    //TemperaturaRotorTurbinaDeBaja(U1RTB, TgTB, U2RTB, TRCB, U3RTB, Tlub, U4RTB, TgenfB, mRTB, CPmaterial, CITRTB);
    scope.outputs[6].value = TemperaturaRotorTurbinaDeBaja (
      scope.TemperaturaRotorTurbinaDeBaja[0].value,
      scope.TemperaturaRotorTurbinaDeBaja[1].value,
      scope.TemperaturaRotorTurbinaDeBaja[2].value,
      scope.TemperaturaRotorTurbinaDeBaja[3].value,
      scope.TemperaturaRotorTurbinaDeBaja[4].value,
      scope.TemperaturaRotorTurbinaDeBaja[5].value,
      scope.TemperaturaRotorTurbinaDeBaja[6].value,
      scope.TemperaturaRotorTurbinaDeBaja[7].value,
      scope.TemperaturaRotorTurbinaDeBaja[8].value,
      scope.TemperaturaRotorTurbinaDeBaja[9].value,
      scope.TemperaturaRotorTurbinaDeBaja[10].value);

    scope.TemperaturaRotorCompresorDeBaja[3].value = scope.outputs[6].value;
    scope.TempSalidaInter[2].value = scope.TemperaturaRotorTurbinaDeBaja[5].value * 1.1;
    //TemperaturaCarcasaTurbinaDeBaja(U1CTB, Tenf, U2CTB, TgTB, mCTB, CPmaterial, CITCTB);
    scope.outputs[7].value = TemperaturaCarcasaTurbinaDeBaja (
      scope.TemperaturaCarcasaTurbinaDeBaja[0].value,
      scope.TemperaturaCarcasaTurbinaDeBaja[1].value,
      scope.TemperaturaCarcasaTurbinaDeBaja[2].value,
      scope.TemperaturaCarcasaTurbinaDeBaja[3].value,
      scope.TemperaturaCarcasaTurbinaDeBaja[4].value,
      scope.TemperaturaCarcasaTurbinaDeBaja[5].value,
      scope.TemperaturaCarcasaTurbinaDeBaja[6].value);

    scope.TemperaturadeAireEnElHabitaculo[1].value = scope.outputs[7].value;

    //TemperaturadeAireEnElHabitaculo(U1enf, TCTB, U2enf, TCCB, FMaire, Tchiller, U3enf, TCTA, U4enf, TCCA, menf, CPaire,CITenf);
    scope.outputs[8].value = TemperaturadeAireEnElHabitaculo (
      scope.TemperaturadeAireEnElHabitaculo[0].value,
      scope.TemperaturadeAireEnElHabitaculo[1].value,
      scope.TemperaturadeAireEnElHabitaculo[2].value,
      scope.TemperaturadeAireEnElHabitaculo[3].value,
      scope.TemperaturadeAireEnElHabitaculo[4].value,
      scope.TemperaturadeAireEnElHabitaculo[5].value,
      scope.TemperaturadeAireEnElHabitaculo[6].value,
      scope.TemperaturadeAireEnElHabitaculo[7].value,
      scope.TemperaturadeAireEnElHabitaculo[8].value,
      scope.TemperaturadeAireEnElHabitaculo[9].value,
      scope.TemperaturadeAireEnElHabitaculo[10].value,
      scope.TemperaturadeAireEnElHabitaculo[11].value,
      scope.TemperaturadeAireEnElHabitaculo[12].value);

    scope.TemperaturaCarcasaTurbinaDeBaja[1].value = scope.outputs[8].value;
    scope.TemperaturaCarcasaCompresorDeBaja[1].value = scope.outputs[8].value;
    scope.TemperaturaCarcasaTurbinaDeAlta[1].value = scope.outputs[8].value;
    scope.TemperaturaCarcasaCompresorDeAlta[1].value = scope.outputs[8].value;

    //NivelTanque( Fin, Fout, Area, CITanque, signal);
    scope.outputs[9].value = NivelTanque (
      scope.NivelTanque[0].value,
      scope.NivelTanque[1].value,
      scope.NivelTanque[2].value,
      scope.NivelTanque[3].value,
      scope.NivelTanque[4].value);

    //PresionBomba( ValMaxPre, TaoBomba, CIPBomba, signal);
    scope.outputs[11].value = PresionBomba (
      scope.PresionBomba[0].value,
      scope.PresionBomba[1].value,
      scope.PresionBomba[2].value,
      scope.PresionBomba[3].value);

    //FlujoBomba( ValMaxFlujo, TaoBomba, CIFBomba, signal);
    scope.outputs[12].value = FlujoBomba (
      scope.FlujoBomba[0].value,
      scope.FlujoBomba[1].value,
      scope.FlujoBomba[2].value,
      scope.FlujoBomba[3].value);

    //FlujoBombaBarrido( ValMaxFlujoBarrido, TaoBombaBarrido, CIFBombaBarrido, signal);
    scope.outputs[13].value = FlujoBombaBarrido (
      scope.FlujoBombaBarrido[0].value,
      scope.FlujoBombaBarrido[1].value,
      scope.FlujoBombaBarrido[2].value,
      scope.FlujoBombaBarrido[3].value);

    scope.TempSalidaInter[8].value = scope.outputs[13].value;

    //TempSalidaInter( U_A_Tamb, CP_ac2, Tac_in, CITemp_ac, U_A, Masa_ac_CP_ac2, Densidad2, signal, CIBombadeabrrido);
    scope.outputs[14].value = TempSalidaInter (
      scope.TempSalidaInter[0].value,
      scope.TempSalidaInter[1].value,
      scope.TempSalidaInter[2].value,
      scope.TempSalidaInter[3].value,
      scope.TempSalidaInter[4].value,
      scope.TempSalidaInter[5].value,
      scope.TempSalidaInter[6].value,
      scope.TempSalidaInter[7].value,
      scope.TempSalidaInter[8].value);

    scope.TemperaturaTanque[3].value = scope.outputs[14].value;

    //Flujo_aire_carters( ValFlujo, TaoFlujo, CIFlujo, signal);
    scope.outputs[15].value = Flujo_aire_carters (
      scope.Flujo_aire_carters[0].value,
      scope.Flujo_aire_carters[1].value,
      scope.Flujo_aire_carters[2].value,
      scope.Flujo_aire_carters[3].value);

    scope.TemperaturaRotorCompresorDeBaja[8].value = scope.outputs[0].value;
    scope.TemperaturaCarcasaCompresorDeBaja[6].value = scope.outputs[1].value;
    scope.TemperaturaRotorCompresorDeAlta[8].value = scope.outputs[2].value;
    scope.TemperaturaCarcasaCompresorDeAlta[6].value = scope.outputs[3].value;
    scope.TemperaturaRotorTurbinaDeAlta[10].value = scope.outputs[4].value;
    scope.TemperaturaCarcasaTurbinaDeAlta[6].value = scope.outputs[5].value;
    scope.TemperaturaRotorTurbinaDeBaja[10].value = scope.outputs[6].value;
    scope.TemperaturaCarcasaTurbinaDeBaja[6].value = scope.outputs[7].value;
    scope.TemperaturadeAireEnElHabitaculo[12].value = scope.outputs[8].value;
    scope.NivelTanque[3].value = scope.outputs[9].value;
    scope.TemperaturaTanque[0].value = scope.outputs[10].value;
    scope.PresionBomba[2].value = scope.outputs[11].value;
    scope.FlujoBomba[2].value = scope.outputs[12].value;
    scope.FlujoBombaBarrido[2].value = scope.outputs[13].value;
    scope.TempSalidaInter[3].value = scope.outputs[14].value;
    scope.Flujo_aire_carters[2].value = scope.outputs[15].value;

  if(/*(scope.timer % 60) == 0*/ true ){
    console.log(scope.outputs[0].value);
    var minute = scope.timer / 60;
    var rofl = {
      "c": [
        {
          "v": scope.timer
        },{
          "v": scope.outputs[0].value,
          "f": (Math.floor(scope.outputs[0].value * 100) / 100) + " °C"
        }
      ]
      
    }
    scope.char.data.rows.push( rofl );

    console.log(scope.outputs[1].value);
    console.log(scope.outputs[2].value);
    console.log(scope.outputs[3].value);
    console.log(scope.outputs[4].value);
    console.log(scope.outputs[5].value);
    console.log(scope.outputs[6].value);
    console.log(scope.outputs[7].value);
    console.log(scope.outputs[8].value);
    console.log(scope.outputs[9].value);
  
    console.log(scope.outputs[10].value);
    console.log(scope.outputs[11].value);
    console.log(scope.outputs[12].value);
    console.log(scope.outputs[13].value);
    console.log(scope.outputs[14].value);
    console.log(scope.outputs[15].value);
    console.log('FIN');
  }
}

function condicionesIniciales ( scope ) {

  scope.TemperaturaRotorCompresorDeBaja[0].value = 1;
  scope.TemperaturaRotorCompresorDeBaja[1].value = 112.2 ;
  scope.TemperaturaRotorCompresorDeBaja[2].value = 1 ;
  scope.TemperaturaRotorCompresorDeBaja[3].value = 1 ;
  scope.TemperaturaRotorCompresorDeBaja[4].value = .8 ;
  scope.TemperaturaRotorCompresorDeBaja[5].value = 1 ;
  scope.TemperaturaRotorCompresorDeBaja[6].value = 1.7500 ;
  scope.TemperaturaRotorCompresorDeBaja[7].value = .502;
  scope.TemperaturaRotorCompresorDeBaja[8].value = 25;

  scope.TemperaturaCarcasaCompresorDeBaja[0].value = 1 ;
  scope.TemperaturaCarcasaCompresorDeBaja[1].value = 1 ;
  scope.TemperaturaCarcasaCompresorDeBaja[2].value = 1 ;
  scope.TemperaturaCarcasaCompresorDeBaja[3].value = 112.2 ;
  scope.TemperaturaCarcasaCompresorDeBaja[4].value = .5 ;
  scope.TemperaturaCarcasaCompresorDeBaja[5].value = .502 ;
  scope.TemperaturaCarcasaCompresorDeBaja[6].value = 25;

  scope.TemperaturaRotorCompresorDeAlta[0].value = 1 ;
  scope.TemperaturaRotorCompresorDeAlta[1].value = 234 ;
  scope.TemperaturaRotorCompresorDeAlta[2].value = 1 ;
  scope.TemperaturaRotorCompresorDeAlta[3].value = 1 ;
  scope.TemperaturaRotorCompresorDeAlta[4].value = .8 ;
  scope.TemperaturaRotorCompresorDeAlta[5].value = 300 ;
  scope.TemperaturaRotorCompresorDeAlta[6].value = .5 ;
  scope.TemperaturaRotorCompresorDeAlta[7].value = .502 ;
  scope.TemperaturaRotorCompresorDeAlta[8].value = 25;

  scope.TemperaturaCarcasaCompresorDeAlta[0].value = 1 ;
  scope.TemperaturaCarcasaCompresorDeAlta[1].value = 1 ;
  scope.TemperaturaCarcasaCompresorDeAlta[2].value = 1 ;
  scope.TemperaturaCarcasaCompresorDeAlta[3].value = 234 ;
  scope.TemperaturaCarcasaCompresorDeAlta[4].value = .5 ;
  scope.TemperaturaCarcasaCompresorDeAlta[5].value = .502 ;
  scope.TemperaturaCarcasaCompresorDeAlta[6].value = 25;

  scope.TemperaturaRotorTurbinaDeAlta[0].value =     1 ;
  scope.TemperaturaRotorTurbinaDeAlta[1].value = 864 ;
  scope.TemperaturaRotorTurbinaDeAlta[2].value = 1 ;
  scope.TemperaturaRotorTurbinaDeAlta[3].value = 1 ;
  scope.TemperaturaRotorTurbinaDeAlta[4].value = .8 ;
  scope.TemperaturaRotorTurbinaDeAlta[5].value = 300 ;
  scope.TemperaturaRotorTurbinaDeAlta[6].value = 1 ;
  scope.TemperaturaRotorTurbinaDeAlta[7].value = 908 ;
  scope.TemperaturaRotorTurbinaDeAlta[8].value = .5 ;
  scope.TemperaturaRotorTurbinaDeAlta[9].value = .502 ;
  scope.TemperaturaRotorTurbinaDeAlta[10].value = 25;

  scope.TemperaturaCarcasaTurbinaDeAlta[0].value =   1 ;
  scope.TemperaturaCarcasaTurbinaDeAlta[1].value = 1 ;
  scope.TemperaturaCarcasaTurbinaDeAlta[2].value = 1 ;
  scope.TemperaturaCarcasaTurbinaDeAlta[3].value = 1100 ;
  scope.TemperaturaCarcasaTurbinaDeAlta[4].value = .5 ;
  scope.TemperaturaCarcasaTurbinaDeAlta[5].value = .502 ;
  scope.TemperaturaCarcasaTurbinaDeAlta[6].value = 25;

  scope.TemperaturaRotorTurbinaDeBaja[0].value =     1 ;
  scope.TemperaturaRotorTurbinaDeBaja[1].value = 864 ;
  scope.TemperaturaRotorTurbinaDeBaja[2].value = 1 ;
  scope.TemperaturaRotorTurbinaDeBaja[3].value = 1 ;
  scope.TemperaturaRotorTurbinaDeBaja[4].value = .8 ;
  scope.TemperaturaRotorTurbinaDeBaja[5].value = 300 ;
  scope.TemperaturaRotorTurbinaDeBaja[6].value = 1 ;
  scope.TemperaturaRotorTurbinaDeBaja[7].value = 908 ;
  scope.TemperaturaRotorTurbinaDeBaja[8].value = .51 ;
  scope.TemperaturaRotorTurbinaDeBaja[9].value = .502 ;
  scope.TemperaturaRotorTurbinaDeBaja[10].value = 25;

  scope.TemperaturaCarcasaTurbinaDeBaja[0].value =   1 ;
  scope.TemperaturaCarcasaTurbinaDeBaja[1].value = 1 ;
  scope.TemperaturaCarcasaTurbinaDeBaja[2].value = 1 ;
  scope.TemperaturaCarcasaTurbinaDeBaja[3].value = 864 ;
  scope.TemperaturaCarcasaTurbinaDeBaja[4].value = .51 ;
  scope.TemperaturaCarcasaTurbinaDeBaja[5].value = .502 ;
  scope.TemperaturaCarcasaTurbinaDeBaja[6].value = 25;

  scope.TemperaturadeAireEnElHabitaculo[0].value =   1 ;
  scope.TemperaturadeAireEnElHabitaculo[1].value = 1 ;
  scope.TemperaturadeAireEnElHabitaculo[2].value = 1 ;
  scope.TemperaturadeAireEnElHabitaculo[3].value = 1 ;
  scope.TemperaturadeAireEnElHabitaculo[4].value = 100 ;
  scope.TemperaturadeAireEnElHabitaculo[5].value = 30 ;
  scope.TemperaturadeAireEnElHabitaculo[6].value = .1 ;
  scope.TemperaturadeAireEnElHabitaculo[7].value = 1 ;
  scope.TemperaturadeAireEnElHabitaculo[8].value = 1 ;
  scope.TemperaturadeAireEnElHabitaculo[9].value = 1 ;
  scope.TemperaturadeAireEnElHabitaculo[10].value = .51 ;
  scope.TemperaturadeAireEnElHabitaculo[11].value = 1.010 ;
  scope.TemperaturadeAireEnElHabitaculo[12].value = 25;

  scope.NivelTanque[0].value = 0.020 ;
  scope.NivelTanque[1].value = 0.021 ;
  scope.NivelTanque[2].value = 3.4125 ;
  scope.NivelTanque[3].value = 0.3881 ;
  scope.NivelTanque[4].value = 1;

  scope.TemperaturaTanque[0].value = 70 ;
  scope.TemperaturaTanque[1].value = 10 ;
  scope.TemperaturaTanque[2].value = 1.98 ;
  scope.TemperaturaTanque[3].value = 75 ;
  scope.TemperaturaTanque[4].value = 0 ;
  scope.TemperaturaTanque[5].value = 65;

  scope.PresionBomba[0].value = 206 ;
  scope.PresionBomba[1].value = 0.5 ;
  scope.PresionBomba[2].value = 0 ;
  scope.PresionBomba[3].value = 1;

  scope.FlujoBomba[0].value = 0.021 ;
  scope.FlujoBomba[1].value = 0.5 ;
  scope.FlujoBomba[2].value = 0 ;
  scope.FlujoBomba[3].value = 1;

  scope.FlujoBombaBarrido[0].value = 0.021 ;
  scope.FlujoBombaBarrido[1].value = 0.5 ;
  scope.FlujoBombaBarrido[2].value = 0 ;
  scope.FlujoBombaBarrido[3].value = 1;

  scope.TempSalidaInter[0].value = .2 ;
  scope.TempSalidaInter[1].value = 1.98 ;
  scope.TempSalidaInter[2].value = 600 ;
  scope.TempSalidaInter[3].value = 25 ;
  scope.TempSalidaInter[4].value = 190 ;
  scope.TempSalidaInter[5].value = 65 ;
  scope.TempSalidaInter[6].value = 690 ;
  scope.TempSalidaInter[7].value = 1;
  scope.TempSalidaInter[8].value = 0;

  scope.Flujo_aire_carters[0].value = 0.063 ;
  scope.Flujo_aire_carters[1].value = 0.5 ;
  scope.Flujo_aire_carters[2].value = 0 ;
  scope.Flujo_aire_carters[3].value = 1;
}

function addColumn ( scope ) { 
  var column = {
    "id": "c" + scope.char.data.cols.length,
    "label": "C" + scope.char.data.cols.length,
    "type": "number"
  }

  scope.char.data.cols.push( column );
}