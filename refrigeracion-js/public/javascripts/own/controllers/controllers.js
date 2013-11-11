var refrigeracionAppModule  = angular.module( 'lol', [] );

refrigeracionAppModule.controller( 'TurbinaController', turbinaController );

turbinaController.$inject = [ '$scope', '$timeout' ];
function turbinaController ( scope, timeout ) {
  scope.timer = 1;

  var data = {
    TemperaturaRotorCompresorDeBaja:   [{ label: 'U1RCB', value: 1 },
                                        { label: 'TCCB', value: 1 },
                                        { label: 'U2RCB', value: 1 },
                                        { label: 'TRTB', value: 1 },
                                        { label: 'U3RCB', value: 1 },
                                        { label: 'Tlub', value: 1 },
                                        { label: 'mRCB', value: 1 },
                                        { label: 'CPmaterial', value: 1 },
                                        { label: 'CITRCB' , value: 1}],

    TemperaturaCarcasaCompresorDeBaja: [{ label: 'U1CCB', value: 1 },
                                        { label: 'Tenf', value: 1 },
                                        { label: 'U2CCB', value: 1 },
                                        { label: 'TgCB', value: 1 },
                                        { label: 'mCCB', value: 1 },
                                        { label: 'CPmaterial', value: 1 },
                                        { label: 'CITCCB' , value: 1}],

    TemperaturaRotorCompresorDeAlta:   [{ label: 'U1RCA', value: 1 },
                                        { label: 'TCCA', value: 1 },
                                        { label: 'U2RCA', value: 1 },
                                        { label: 'TRTA', value: 1 },
                                        { label: 'U3RCA', value: 1 },
                                        { label: 'Tlub', value: 1 },
                                        { label: 'mRCA', value: 1 },
                                        { label: 'CPmaterial', value: 1 },
                                        { label: 'CITRCA' , value: 1}],

    TemperaturaCarcasaCompresorDeAlta: [{ label: 'U1CCA', value: 1 },
                                        { label: 'Tenf', value: 1 },
                                        { label: 'U2CCA', value: 1 },
                                        { label: 'TgCA', value: 1 },
                                        { label: 'mCCA', value: 1 },
                                        { label: 'CPmaterial', value: 1 },
                                        { label: 'CITCCA' , value: 1}],

    TemperaturaRotorTurbinaDeAlta:     [{ label: 'U1RTA', value: 1 },
                                        { label: 'TgTA', value: 1 },
                                        { label: 'U2RTA', value: 1 },
                                        { label: 'TRCA', value: 1 },
                                        { label: 'U3RTA', value: 1 },
                                        { label: 'Tlub', value: 1 },
                                        { label: 'U4RTA', value: 1 },
                                        { label: 'TgenfA', value: 1 },
                                        { label: 'mRTA', value: 1 },
                                        { label: 'CPmaterial', value: 1 },
                                        { label: 'CITRTA' , value: 1}],

    TemperaturaCarcasaTurbinaDeAlta:   [{ label: 'U1CTA', value: 1 },
                                        { label: 'Tenf', value: 1 },
                                        { label: 'U2CTA', value: 1 },
                                        { label: 'TgTA', value: 1 },
                                        { label: 'mCTA', value: 1 },
                                        { label: 'CPmaterial', value: 1 },
                                        { label: 'CITCTA' , value: 1}],

    TemperaturaRotorTurbinaDeBaja:     [{ label: 'U1RTB', value: 1 },
                                        { label: 'TgTB', value: 1 },
                                        { label: 'U2RTB', value: 1 },
                                        { label: 'TRCB', value: 1 },
                                        { label: 'U3RTB', value: 1 },
                                        { label: 'Tlub', value: 1 },
                                        { label: 'U4RTB', value: 1 },
                                        { label: 'TgenfB', value: 1 },
                                        { label: 'mRTB', value: 1 },
                                        { label: 'CPmaterial', value: 1 },
                                        { label: 'CITRTB' , value: 1}],

    TemperaturaCarcasaTurbinaDeBaja:   [{ label: 'U1CTB', value: 1 },
                                        { label: 'Tenf', value: 1 },
                                        { label: 'U2CTB', value: 1 },
                                        { label: 'TgTB', value: 1 },
                                        { label: 'mCTB', value: 1 },
                                        { label: 'CPmaterial', value: 1 },
                                        { label: 'CITCTB' , value: 1}],

    TemperaturadeAireEnElHabitaculo:   [{ label: 'U1enf', value: 1 },
                                        { label: 'TCTB', value: 1 },
                                        { label: 'U2enf', value: 1 },
                                        { label: 'TCCB', value: 1 },
                                        { label: 'FMaire', value: 1 },
                                        { label: 'Tchiller', value: 1 },
                                        { label: 'U3enf', value: 1 },
                                        { label: 'TCTA', value: 1 },
                                        { label: 'U4enf', value: 1 },
                                        { label: 'TCCA', value: 1 },
                                        { label: 'menf', value: 1 },
                                        { label: 'CPaire', value: 1 },
                                        { label: 'ITenf' , value: 1}],

    NivelTanque:                       [{ label: 'Fin', value: 1 },
                                        { label: 'Fout', value: 1 },
                                        { label: 'Area', value: 1 },
                                        { label: 'CITanque', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaTanque:                 [{ label: 'CITin_tanque', value: 1 },
                                        { label: 'FlujoMasico_ac', value: 1 },
                                        { label: 'CP_ac', value: 1 },
                                        { label: 'Temp_ac_in', value: 1 },
                                        { label: 'q_elect1', value: 1 },
                                        { label: 'Masa_ac_in' , value: 1}],

    PresionBomba:                      [{ label: 'ValMaxPre', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
                                        { label: 'CIPBomba', value: 1 },
                                        { label: 'signal' , value: 1}],

    FlujoBomba:                        [{ label: 'ValMaxFlujo', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
                                        { label: 'CIFBomba', value: 1 },
                                        { label: 'signal' , value: 1}],

    FlujoBombaBarrido:                 [{ label: 'ValMaxFlujoBarrido', value: 1 },
                                        { label: 'TaoBombaBarrido', value: 1 },
                                        { label: 'CIFBombaBarrido', value: 1 },
                                        { label: 'signal' , value: 1}],

    TempSalidaInter:                   [{ label: 'U_A_Tamb', value: 1 },
                                        { label: 'CP_ac2', value: 1 },
                                        { label: 'Tac_in', value: 1 },
                                        { label: 'CITemp_ac', value: 1 },
                                        { label: 'U_A', value: 1 },
                                        { label: 'Masa_ac_CP_ac2', value: 1 },
                                        { label: 'Densidad2', value: 1 },
                                        { label: 'signal' , value: 1},
                                        { label: 'CIBombadeabrrido' , value: 1}],

    Flujo_aire_carters:                [{ label: 'ValFlujo', value: 1 },
                                        { label: 'TaoFlujo', value: 1 },
                                        { label: 'CIFlujo', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCA:                     [{ label: 'ValMaxTCA', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
                                        { label: 'CITCA', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCB:                     [{ label: 'ValMaxTCB', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
                                        { label: 'CITCB', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCC:                     [{ label: 'ValMaxTCC', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
                                        { label: 'CITCC', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCD:                     [{ label: 'ValMaxTCD', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
                                        { label: 'CITCD', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaCE:                     [{ label: 'ValMaxTCE', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
                                        { label: 'CITCE', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaLUB:                    [{ label: 'ValMaxTLUB', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
                                        { label: 'CITLUB', value: 1 },
                                        { label: 'signal' , value: 1}],

    TemperaturaTAGB:                   [{ label: 'ValMaxTAGB', value: 1 },
                                        { label: 'TaoBomba', value: 1 },
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
                                        { label: 'Flujo Aire Carters', value: 0 },
                                        { label: 'Temperatura CA', value: 0 },
                                        { label: 'Temperatura CB', value: 0 },
                                        { label: 'Temperatura CC', value: 0 },
                                        { label: 'Temperatura CD', value: 0 },
                                        { label: 'Temperatura CE', value: 0 },
                                        { label: 'Temperatura LUB', value: 0 },
                                        { label: 'Temperatura TAGB', value: 0 }]
  };

  scope.TemperaturaRotorCompresorDeBaja = data.TemperaturaRotorCompresorDeBaja;
  scope.TemperaturaCarcasaCompresorDeBaja = data.TemperaturaCarcasaCompresorDeBaja;
  scope.TemperaturaRotorCompresorDeAlta = data.TemperaturaRotorCompresorDeAlta;
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
  scope.TemperaturaCA = data.TemperaturaCA;
  scope.TemperaturaCB = data.TemperaturaCB;
  scope.TemperaturaCC = data.TemperaturaCC;
  scope.TemperaturaCD = data.TemperaturaCD;
  scope.TemperaturaCE = data.TemperaturaCE;
  scope.TemperaturaLUB = data.TemperaturaLUB;
  scope.TemperaturaTAGB = data.TemperaturaTAGB;

  //OUTPUTS

  scope.outputs = data.Outputs;

  var stop;
  scope.play = function () {
    stop = timeout( function () {
      scope.timer++;
      scope.play();
      calculus(scope);
      /*if( scope.timer > 9 ){
        timeout.cancel( stop );
      }*/
    }, 1000)

    
  };

  scope.stop = function () {
    timeout.cancel( stop );
  }

  scope.selectedIndex = 0;

  scope.hover = function ( index ) {
    scope.selectedIndex = index;
  }
}

function calculus ( scope ) {
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



  //TemperaturaCarcasaCompresorDeBaja(U1CCB, Tenf, U2CCB, TgCB, mCCB, CPmaterial, CITCCB);
  scope.outputs[1].value = TemperaturaCarcasaCompresorDeBaja(
                                          scope.TemperaturaCarcasaCompresorDeBaja[0].value,
                                          scope.TemperaturaCarcasaCompresorDeBaja[1].value,
                                          scope.TemperaturaCarcasaCompresorDeBaja[2].value,
                                          scope.TemperaturaCarcasaCompresorDeBaja[3].value,
                                          scope.TemperaturaCarcasaCompresorDeBaja[4].value,
                                          scope.TemperaturaCarcasaCompresorDeBaja[5].value,
                                          scope.TemperaturaCarcasaCompresorDeBaja[6].value);

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

  //TemperaturaCarcasaCompresorDeAlta(U1CCA, Tenf, U2CCA, TgCA, mCCA, CPmaterial, CITCCA);
  scope.outputs[3].value = TemperaturaCarcasaCompresorDeAlta(
                                          scope.TemperaturaCarcasaCompresorDeAlta[0].value,
                                          scope.TemperaturaCarcasaCompresorDeAlta[1].value,
                                          scope.TemperaturaCarcasaCompresorDeAlta[2].value,
                                          scope.TemperaturaCarcasaCompresorDeAlta[3].value,
                                          scope.TemperaturaCarcasaCompresorDeAlta[4].value,
                                          scope.TemperaturaCarcasaCompresorDeAlta[5].value,
                                          scope.TemperaturaCarcasaCompresorDeAlta[6].value);

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

  //TemperaturaCarcasaTurbinaDeAlta(U1CTA, Tenf, U2CTA, TgTA, mCTA, CPmaterial, CITCTA);
  scope.outputs[5].value = TemperaturaCarcasaTurbinaDeAlta (
                                          scope.TemperaturaCarcasaTurbinaDeAlta[0].value,
                                          scope.TemperaturaCarcasaTurbinaDeAlta[1].value,
                                          scope.TemperaturaCarcasaTurbinaDeAlta[2].value,
                                          scope.TemperaturaCarcasaTurbinaDeAlta[3].value,
                                          scope.TemperaturaCarcasaTurbinaDeAlta[4].value,
                                          scope.TemperaturaCarcasaTurbinaDeAlta[5].value,
                                          scope.TemperaturaCarcasaTurbinaDeAlta[6].value);

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

  //TemperaturaCarcasaTurbinaDeBaja(U1CTB, Tenf, U2CTB, TgTB, mCTB, CPmaterial, CITCTB);
  scope.outputs[7].value = TemperaturaCarcasaTurbinaDeBaja (
                                          scope.TemperaturaCarcasaTurbinaDeBaja[0].value,
                                          scope.TemperaturaCarcasaTurbinaDeBaja[1].value,
                                          scope.TemperaturaCarcasaTurbinaDeBaja[2].value,
                                          scope.TemperaturaCarcasaTurbinaDeBaja[3].value,
                                          scope.TemperaturaCarcasaTurbinaDeBaja[4].value,
                                          scope.TemperaturaCarcasaTurbinaDeBaja[5].value,
                                          scope.TemperaturaCarcasaTurbinaDeBaja[6].value);

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

  //NivelTanque( Fin, Fout, Area, CITanque, signal);
  scope.outputs[9].value = NivelTanque (
                                          scope.NivelTanque[0].value,
                                          scope.NivelTanque[1].value,
                                          scope.NivelTanque[2].value,
                                          scope.NivelTanque[3].value,
                                          scope.NivelTanque[4].value);

  //TemperaturaTanque(CITin_tanque, FlujoMasico_ac, CP_ac, Temp_ac_in, q_elect1, Masa_ac_in );
  scope.outputs[10].value = TemperaturaTanque (
                                          scope.TemperaturaTanque[0].value,
                                          scope.TemperaturaTanque[1].value,
                                          scope.TemperaturaTanque[2].value,
                                          scope.TemperaturaTanque[3].value,
                                          scope.TemperaturaTanque[4].value,
                                          scope.TemperaturaTanque[5].value);

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

  //Flujo_aire_carters( ValFlujo, TaoFlujo, CIFlujo, signal);
  scope.outputs[15].value = Flujo_aire_carters (
                                          scope.Flujo_aire_carters[0].value,
                                          scope.Flujo_aire_carters[1].value,
                                          scope.Flujo_aire_carters[2].value,
                                          scope.Flujo_aire_carters[3].value);

  //TemperaturaCA( ValMaxTCA, TaoBomba, CITCA, signal);
  scope.outputs[16].value = TemperaturaCA (
                                          scope.TemperaturaCA[0].value,
                                          scope.TemperaturaCA[1].value,
                                          scope.TemperaturaCA[2].value,
                                          scope.TemperaturaCA[3].value);


  //TemperaturaCB( ValMaxTCB, TaoBomba, CITCB, signal);
  scope.outputs[17].value = TemperaturaCB (
                                          scope.TemperaturaCB[0].value,
                                          scope.TemperaturaCB[1].value,
                                          scope.TemperaturaCB[2].value,
                                          scope.TemperaturaCB[3].value);

  //TemperaturaCC( ValMaxTCC, TaoBomba, CITCC, signal);
  scope.outputs[18].value = TemperaturaCC (
                                          scope.TemperaturaCC[0].value,
                                          scope.TemperaturaCC[1].value,
                                          scope.TemperaturaCC[2].value,
                                          scope.TemperaturaCC[3].value);

  //TemperaturaCD( ValMaxTCD, TaoBomba, CITCD, signal);
  scope.outputs[19].value = TemperaturaCD (
                                          scope.TemperaturaCD[0].value,
                                          scope.TemperaturaCD[1].value,
                                          scope.TemperaturaCD[2].value,
                                          scope.TemperaturaCD[3].value);

  //TemperaturaCE( ValMaxTCE, TaoBomba, CITCE, signal);
  scope.outputs[20].value = TemperaturaCE (
                                          scope.TemperaturaCE[0].value,
                                          scope.TemperaturaCE[1].value,
                                          scope.TemperaturaCE[2].value,
                                          scope.TemperaturaCE[3].value);

  //TemperaturaLUB( ValMaxTLUB, TaoBomba, CITLUB, signal);
  scope.outputs[21].value = TemperaturaLUB (
                                          scope.TemperaturaLUB[0].value,
                                          scope.TemperaturaLUB[1].value,
                                          scope.TemperaturaLUB[2].value,
                                          scope.TemperaturaLUB[3].value);

  //TemperaturaTAGB( ValMaxTAGB, TaoBomba, CITTAGB, signal);
  scope.outputs[22].value = TemperaturaTAGB (
                                          scope.TemperaturaTAGB[0].value,
                                          scope.TemperaturaTAGB[1].value,
                                          scope.TemperaturaTAGB[2].value,
                                          scope.TemperaturaTAGB[3].value);


  scope.TemperaturaRotorCompresorDeBaja[8].value = scope.outputs[0].value;
  scope.TemperaturaCarcasaCompresorDeBaja[6].value = scope.outputs[1].value;
  scope.TemperaturaRotorCompresorDeAlta[8].value = scope.outputs[2].value;
  scope.TemperaturaCarcasaCompresorDeAlta[6].value = scope.outputs[3].value;
  scope.TemperaturaRotorTurbinaDeAlta[10].value = scope.outputs[4].value;
  scope.TemperaturaCarcasaTurbinaDeAlta[6].value = scope.outputs[5].value;
  scope.TemperaturaRotorTurbinaDeBaja[10].value = scope.outputs[6].value;
  scope.TemperaturaCarcasaTurbinaDeBaja[6].value = scope.outputs[7].value;
  scope.TemperaturadeAireEnElHabitaculo[2].value = scope.outputs[8].value;
  scope.NivelTanque[3].value = scope.outputs[9].value;
  scope.TemperaturaTanque[0].value = scope.outputs[10].value;
  scope.PresionBomba[2].value = scope.outputs[11].value;
  scope.FlujoBomba[2].value = scope.outputs[12].value;
  scope.FlujoBombaBarrido[2].value = scope.outputs[13].value;
  scope.TempSalidaInter[8].value = scope.outputs[14].value;
  scope.Flujo_aire_carters[2].value = scope.outputs[15].value;
  scope.TemperaturaCA[2].value = scope.outputs[16].value;
  scope.TemperaturaCB[2].value = scope.outputs[17].value;
  scope.TemperaturaCC[2].value = scope.outputs[18].value;
  scope.TemperaturaCD[2].value = scope.outputs[19].value;
  scope.TemperaturaCE[2].value = scope.outputs[20].value;
  scope.TemperaturaLUB[2].value = scope.outputs[21].value;
  scope.TemperaturaTAGB[2].value = scope.outputs[22].value;
}