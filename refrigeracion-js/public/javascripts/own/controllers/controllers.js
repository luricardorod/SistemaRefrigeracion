var refrigeracionAppModule  = angular.module( 'lol', [] );

refrigeracionAppModule.controller( 'TurbinaController', turbinaController );

turbinaController.$inject = [ '$scope' ];
function turbinaController ( scope ) {
  var data = {
    TemperaturaRotorCompresorDeBaja:   [{ label: 'U1RCB' },
                                        { label: 'TCCB' },
                                        { label: 'U2RCB' },
                                        { label: 'TRTB' },
                                        { label: 'U3RCB' },
                                        { label: 'Tlub' },
                                        { label: 'mRCB' },
                                        { label: 'CPmaterial' },
                                        { label: 'CITRCB' }],

    TemperaturaCarcasaCompresorDeBaja: [{ label: 'U1CCB' },
                                        { label: 'Tenf' },
                                        { label: 'U2CCB' },
                                        { label: 'TgCB' },
                                        { label: 'mCCB' },
                                        { label: 'CPmaterial' },
                                        { label: 'CITCCB' }],

    TemperaturaRotorCompresorDeAlta:   [{ label: 'U1RCA' },
                                        { label: 'TCCA' },
                                        { label: 'U2RCA' },
                                        { label: 'TRTA' },
                                        { label: 'U3RCA' },
                                        { label: 'Tlub' },
                                        { label: 'mRCA' },
                                        { label: 'CPmaterial' },
                                        { label: 'CITRCA' }],

    TemperaturaCarcasaCompresorDeAlta: [{ label: 'U1CCA' },
                                        { label: 'Tenf' },
                                        { label: 'U2CCA' },
                                        { label: 'TgCA' },
                                        { label: 'mCCA' },
                                        { label: 'CPmaterial' },
                                        { label: 'CITCCA' }],

    TemperaturaRotorTurbinaDeAlta:     [{ label: 'U1RTA' },
                                        { label: 'TgTA' },
                                        { label: 'U2RTA' },
                                        { label: 'TRCA' },
                                        { label: 'U3RTA' },
                                        { label: 'Tlub' },
                                        { label: 'U4RTA' },
                                        { label: 'TgenfA' },
                                        { label: 'mRTA' },
                                        { label: 'CPmaterial' },
                                        { label: 'CITRTA' }],

    TemperaturaCarcasaTurbinaDeAlta:   [{ label: 'U1CTA' },
                                        { label: 'Tenf' },
                                        { label: 'U2CTA' },
                                        { label: 'TgTA' },
                                        { label: 'mCTA' },
                                        { label: 'CPmaterial' },
                                        { label: 'CITCTA' }],

    TemperaturaRotorTurbinaDeBaja:     [{ label: 'U1RTB' },
                                        { label: 'TgTB' },
                                        { label: 'U2RTB' },
                                        { label: 'TRCB' },
                                        { label: 'U3RTB' },
                                        { label: 'Tlub' },
                                        { label: 'U4RTB' },
                                        { label: 'TgenfB' },
                                        { label: 'mRTB' },
                                        { label: 'CPmaterial' },
                                        { label: 'CITRTB' }],

    TemperaturaCarcasaTurbinaDeBaja:   [{ label: 'U1CTB' },
                                        { label: 'Tenf' },
                                        { label: 'U2CTB' },
                                        { label: 'TgTB' },
                                        { label: 'mCTB' },
                                        { label: 'CPmaterial' },
                                        { label: 'CITCTB' }],

    TemperaturadeAireEnElHabitaculo:   [{ label: 'U1enf' },
                                        { label: 'TCTB' },
                                        { label: 'U2enf' },
                                        { label: 'TCCB' },
                                        { label: 'FMaire' },
                                        { label: 'Tchiller' },
                                        { label: 'U3enf' },
                                        { label: 'TCTA' },
                                        { label: 'U4enf' },
                                        { label: 'TCCA' },
                                        { label: 'menf' },
                                        { label: 'CPaire' },
                                        { label: 'ITenf' }],

    NivelTanque:                       [{ label: 'Fin' },
                                        { label: 'Fout' },
                                        { label: 'Area' },
                                        { label: 'CITanque' },
                                        { label: 'signal' }],

    TemperaturaTanque:                 [{ label: 'CITin_tanque' },
                                        { label: 'FlujoMasico_ac' },
                                        { label: 'CP_ac' },
                                        { label: 'Temp_ac_in' },
                                        { label: 'q_elect1' },
                                        { label: 'Masa_ac_in' }],

    PresionBomba:                      [{ label: 'ValMaxPre' },
                                        { label: 'TaoBomba' },
                                        { label: 'CIPBomba' },
                                        { label: 'signal' }],

    FlujoBomba:                        [{ label: 'ValMaxFlujo' },
                                        { label: 'TaoBomba' },
                                        { label: 'CIFBomba' },
                                        { label: 'signal' }],

    FlujoBombaBarrido:                 [{ label: 'ValMaxFlujoBarrido' },
                                        { label: 'TaoBombaBarrido' },
                                        { label: 'CIFBombaBarrido' },
                                        { label: 'signal' }],

    TempSalidaInter:                   [{ label: 'U_A_Tamb' },
                                        { label: 'CP_ac2' },
                                        { label: 'Tac_in' },
                                        { label: 'CITemp_ac' },
                                        { label: 'U_A' },
                                        { label: 'Masa_ac_CP_ac2' },
                                        { label: 'Densidad2' },
                                        { label: 'signal' }],

    Flujo_aire_carters:                [{ label: 'ValFlujo' },
                                        { label: 'TaoFlujo' },
                                        { label: 'CIFlujo' },
                                        { label: 'signal' }],

    TemperaturaCA:                     [{ label: 'ValMaxTCA' },
                                        { label: 'TaoBomba' },
                                        { label: 'CITCA' },
                                        { label: 'signal' }],

    TemperaturaCB:                     [{ label: 'ValMaxTCB' },
                                        { label: 'TaoBomba' },
                                        { label: 'CITCB' },
                                        { label: 'signal' }],

    TemperaturaCC:                     [{ label: 'ValMaxTCC' },
                                        { label: 'TaoBomba' },
                                        { label: 'CITCC' },
                                        { label: 'signal' }],

    TemperaturaCD:                     [{ label: 'ValMaxTCD' },
                                        { label: 'TaoBomba' },
                                        { label: 'CITCD' },
                                        { label: 'signal' }],

    TemperaturaCE:                     [{ label: 'ValMaxTCE' },
                                        { label: 'TaoBomba' },
                                        { label: 'CITCE' },
                                        { label: 'signal' }],

    TemperaturaLUB:                    [{ label: 'ValMaxTLUB' },
                                        { label: 'TaoBomba' },
                                        { label: 'CITLUB' },
                                        { label: 'signal' }],

    TemperaturaTAGB:                   [{ label: 'ValMaxTAGB' },
                                        { label: 'TaoBomba' },
                                        { label: 'CITTAGB' },
                                        { label: 'signal' }]
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

}

