function TemperaturaRotorCompresorDeBaja(U1RCB, TCCB, U2RCB, TRTB, U3RCB, Tlub, mRCB, CPmaterial, CITRCB) {
  var j,
      h=0.05/100,
      k1,k2,k3,k4,
      x = [];

  x[0] = CITRCB;

  for(j=1;j<25;j++) {

    k1 = ( U1RCB * ( TCCB - x[j-1]) + U2RCB * (TRTB - x[j-1]) + U3RCB * ( Tlub - x[j-1])) / (mRCB * CPmaterial);
    k2 = ( U1RCB * ( TCCB - (x[j-1] + ((h/2) * k1))) + U2RCB * (TRTB - (x[j-1] + ((h/2) * k1))) + U3RCB * ( Tlub - (x[j-1] + ((h/2) * k1)))) / (mRCB * CPmaterial);
    k3 = ( U1RCB * ( TCCB - (x[j-1] + ((h/2) * k2))) + U2RCB * (TRTB - (x[j-1] + ((h/2) * k2))) + U3RCB * ( Tlub - (x[j-1] + ((h/2) * k2)))) / (mRCB * CPmaterial);
    k4 = ( U1RCB * ( TCCB - (x[j-1] + (h * k3))) + U2RCB * (TRTB - (x[j-1] + (h * k3))) + U3RCB * ( Tlub - (x[j-1] + (h * k3)))) / (mRCB * CPmaterial);
    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITRCB<0.0001) {
      x[0]=0; ; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITRCB>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
  //return 189 + U1RCB;
}

function TemperaturaCarcasaCompresorDeBaja(U1CCB, Tenf, U2CCB, TgCB, mCCB, CPmaterial, CITCCB) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0] = CITCCB;

  for(j=1;j<25;j++) {

        k1 = ( U1CCB * ( Tenf - x[j-1] ) + U2CCB * ( TgCB - x[j-1] ) ) / ( mCCB * CPmaterial);
        k2 = ( U1CCB * ( Tenf - ( x[j-1] + (( h/2 ) * k1))) + U2CCB * ( TgCB - ( x[j-1] + (( h/2 ) * k1) ) )) / ( mCCB * CPmaterial);
        k3 = ( U1CCB * ( Tenf - ( x[j-1] + (( h/2 ) * k2))) + U2CCB * ( TgCB - ( x[j-1] + (( h/2 ) * k2) ) ) )/ ( mCCB * CPmaterial);
        k4 = ( U1CCB * ( Tenf - ( x[j-1] + ( h * k3))) + U2CCB * ( TgCB - ( x[j-1] + ( h * k3) ) ))/ ( mCCB * CPmaterial);
        x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITCCB<0.0001) {
      x[0]=0; ; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITCCB>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
}

function TemperaturaRotorCompresorDeAlta(U1RCA, TCCA, U2RCA, TRTA, U3RCA, Tlub, mRCA, CPmaterial, CITRCA) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0] = CITRCA;

  for(j=1;j<25;j++) {

        k1 = ( U1RCA * ( TCCA - x[j-1]) + U2RCA * (TRTA - x[j-1]) + U3RCA * ( Tlub - x[j-1])) / (mRCA * CPmaterial);
        k2 = ( U1RCA * ( TCCA - (x[j-1] + ((h/2) * k1))) + U2RCA * (TRTA - (x[j-1] + ((h/2) * k1))) + U3RCA * ( Tlub - (x[j-1] + ((h/2) * k1)))) / (mRCA * CPmaterial);
        k3 = ( U1RCA * ( TCCA - (x[j-1] + ((h/2) * k2))) + U2RCA * (TRTA - (x[j-1] + ((h/2) * k2))) + U3RCA * ( Tlub - (x[j-1] + ((h/2) * k2)))) / (mRCA * CPmaterial);
        k4 = ( U1RCA * ( TCCA - (x[j-1] + (h * k3))) + U2RCA * (TRTA - (x[j-1] + (h * k3))) + U3RCA * ( Tlub - (x[j-1] + (h * k3)))) / (mRCA * CPmaterial);

        x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITRCA<0.0001) {
      x[0]=0; ; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITRCA>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
}

function TemperaturaCarcasaCompresorDeAlta(U1CCA, Tenf, U2CCA, TgCA, mCCA, CPmaterial, CITCCA) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0] = CITCCA;

  for(j=1;j<25;j++) {

        k1 = ( U1CCA * ( Tenf - x[j-1] ) + U2CCA * ( TgCA - x[j-1] ) ) / ( mCCA * CPmaterial);
        k2 = ( U1CCA * ( Tenf - ( x[j-1] + (( h/2 ) * k1))) + U2CCA * ( TgCA - ( x[j-1] + (( h/2 ) * k1) ) )) / ( mCCA * CPmaterial);
        k3 = ( U1CCA * ( Tenf - ( x[j-1] + (( h/2 ) * k2) )) + U2CCA * ( TgCA - ( x[j-1] + (( h/2 ) * k2) ) )) / ( mCCA * CPmaterial);
        k4 = ( U1CCA * ( Tenf - ( x[j-1] + ( h * k3) )) + U2CCA * ( TgCA - ( x[j-1] + ( h * k3) ) )) / ( mCCA * CPmaterial);
        x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITCCA<0.0001) {
      x[0]=0; ; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITCCA>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
}

function TemperaturaRotorTurbinaDeAlta(U1RTA, TgTA, U2RTA, TRCA, U3RTA, Tlub, U4RTA, Tgenf, mRTA, CPmaterial, CITRTA) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0] = CITRTA;

  for(j=1;j<25;j++) {

        k1 = ( U1RTA * ( TgTA - x[j-1] ) + U2RTA * ( TRCA - x[j-1] ) + U3RTA * ( Tlub - x[j-1]) + U4RTA * ( Tgenf - x[j-1] )) / (mRTA * CPmaterial);
        k2 = ( U1RTA * ( TgTA - ( x[j-1] + ((h/2) * k1))) + U2RTA * ( TRCA - ( x[j-1] + ((h/2) * k1) )) + U3RTA * ( Tlub - ( x[j-1] + ((h/2) * k1))) + U4RTA * ( Tgenf - ( x[j-1] + ((h/2) * k1) ))) / (mRTA * CPmaterial);
        k3 = ( U1RTA * ( TgTA - ( x[j-1] + ((h/2) * k2))) + U2RTA * ( TRCA - ( x[j-1] + ((h/2) * k2) )) + U3RTA * ( Tlub - ( x[j-1] + ((h/2) * k2))) + U4RTA * ( Tgenf - ( x[j-1] + ((h/2) * k2) ))) / (mRTA * CPmaterial);
        k4 = ( U1RTA * ( TgTA - ( x[j-1] + (h * k3) )) + U2RTA * ( TRCA - ( x[j-1] + (h * k3))) + U3RTA * ( Tlub - ( x[j-1] + (h * k3))) + U4RTA * ( Tgenf - ( x[j-1] + (h * k3) ))) / (mRTA * CPmaterial);
        
        x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITRTA<0.0001) {
      x[0]=0; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITRTA>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
}

function TemperaturaCarcasaTurbinaDeAlta(U1CTA, Tenf, U2CTA, TgTA, mCTA, CPmaterial, CITCTA) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0] = CITCTA;

  for(j=1;j<25;j++) {

        k1 = ( U1CTA * ( Tenf - x[j-1] ) + U2CTA * ( TgTA - x[j-1] ) ) / ( mCTA * CPmaterial);
        k2 = ( U1CTA * ( Tenf - ( x[j-1] + (( h/2 ) * k1) )) + U2CTA * ( TgTA - ( x[j-1] + (( h/2 ) * k1) ) )) / ( mCTA * CPmaterial);
        k3 = ( U1CTA * ( Tenf - ( x[j-1] + (( h/2 ) * k2) )) + U2CTA * ( TgTA - ( x[j-1] + (( h/2 ) * k2) ) )) / ( mCTA * CPmaterial);
        k4 = ( U1CTA * ( Tenf - ( x[j-1] + ( h * k3) )) + U2CTA * ( TgTA - ( x[j-1] + ( h * k3) ) )) / ( mCTA * CPmaterial);
        x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITCTA<0.0001) {
      x[0]=0; ; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITCTA>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
}

function TemperaturaRotorTurbinaDeBaja(U1RTB, TgTB, U2RTB, TRCB, U3RTB, Tlub, U4RTB, Tgenf, mRTB, CPmaterial, CITRTB) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0] = CITRTB;

  for(j=1;j<25;j++) {

        k1 = ( U1RTB * ( TgTB - x[j-1] ) + U2RTB * ( TRCB - x[j-1] ) + U3RTB * ( Tlub - x[j-1]) + U4RTB * ( Tgenf - x[j-1] )) / (mRTB * CPmaterial);
        k2 = ( U1RTB * ( TgTB - ( x[j-1] + ((h/2) * k1) )) + U2RTB * ( TRCB - ( x[j-1] + ((h/2) * k1) )) + U3RTB * ( Tlub - ( x[j-1] + ((h/2) * k1))) + U4RTB * ( Tgenf - ( x[j-1] + ((h/2) * k1) ))) / (mRTB * CPmaterial);
        k3 = ( U1RTB * ( TgTB - ( x[j-1] + ((h/2) * k2) )) + U2RTB * ( TRCB - ( x[j-1] + ((h/2) * k2) )) + U3RTB * ( Tlub - ( x[j-1] + ((h/2) * k2))) + U4RTB * ( Tgenf - ( x[j-1] + ((h/2) * k2) ))) / (mRTB * CPmaterial);
        k4 = ( U1RTB * ( TgTB - ( x[j-1] + (h * k3) )) + U2RTB * ( TRCB - ( x[j-1] + (h * k3) )) + U3RTB * ( Tlub - ( x[j-1] + (h * k3))) + U4RTB * ( Tgenf - ( x[j-1] + (h * k3) ))) / (mRTB * CPmaterial);
        
        x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITRTB<0.0001) {
      x[0]=0; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITRTB>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
}

function TemperaturaCarcasaTurbinaDeBaja(U1CTB, Tenf, U2CTB, TgTB, mCTB, CPmaterial, CITCTB) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];
  x[0] = CITCTB;

  for(j=1;j<25;j++) {

        k1 = ( U1CTB * ( Tenf - x[j-1] ) + U2CTB * ( TgTB - x[j-1] ) ) / ( mCTB * CPmaterial);
        k2 = ( U1CTB * ( Tenf - ( x[j-1] + (( h/2 ) * k1) )) + U2CTB * ( TgTB - ( x[j-1] + (( h/2 ) * k1) ) )) / ( mCTB * CPmaterial);
        k3 = ( U1CTB * ( Tenf - ( x[j-1] + (( h/2 ) * k2) ) )+ U2CTB * ( TgTB - ( x[j-1] + (( h/2 ) * k2) ) )) / ( mCTB * CPmaterial);
        k4 = ( U1CTB * ( Tenf - ( x[j-1] + ( h * k3) ) )+ U2CTB * ( TgTB - ( x[j-1] + ( h * k3) ) )) / ( mCTB * CPmaterial);
        x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITCTB<0.0001) {
      x[0]=0; ; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITCTB>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
}

function TemperaturadeAireEnElHabitaculo(U1enf, TCTB, U2enf, TCCB, FMaire, Tchiller, U3enf, TCTA, U4enf, TCCA, menf, CPaire,CITenf) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0] = CITenf;

  for(j=1;j<25;j++) {

    k1 = ( U1enf * (TCTB - x[j-1]) + U2enf * (TCCB - x[j-1]) + FMaire * CPaire * (Tchiller - x[j-1]) + U3enf *(TCTA - x[j-1]) + U4enf * (TCCA -x[j-1])) / (menf * CPaire);
    k2 = ( U1enf * (TCTB - (x[j-1]+ ((h/2)* k1))) + U2enf * (TCCB - (x[j-1]+ ((h/2)* k1))) + FMaire * CPaire * (Tchiller - (x[j-1]+ ((h/2)* k1))) + U3enf *(TCTA - (x[j-1]+ ((h/2)* k1))) + U4enf * (TCCA -(x[j-1]+ ((h/2)* k1)))) / (menf * CPaire);
    k3 = ( U1enf * (TCTB - (x[j-1]+ ((h/2)* k2))) + U2enf * (TCCB - (x[j-1]+ ((h/2)* k2))) + FMaire * CPaire * (Tchiller - (x[j-1]+ ((h/2)* k2))) + U3enf *(TCTA - (x[j-1]+ ((h/2)* k2))) + U4enf * (TCCA -(x[j-1]+ ((h/2)* k2)))) / (menf * CPaire);
    k4 = ( U1enf * (TCTB - (x[j-1]+ (h*k3))) + U2enf * (TCCB - (x[j-1]+ (h*k3))) + FMaire * CPaire * (Tchiller - (x[j-1]+ (h*k3))) + U3enf *(TCTA - (x[j-1]+ (h*k3))) + U4enf * (TCCA -(x[j-1]+ (h*k3)))) / (menf * CPaire);
    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  
  if(CITenf<0.0001) {
      x[0]=0; ; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  }
  else if (CITenf>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  }
  else {
      x[0]=x[j-1];
  }
  return x[0];
}

function NivelTanque( Fin, Fout, Area, CITanque, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0]=CITanque;

  for(j=1;j<25;j++) {
    k1=((Fin*signal)-(Fout))/Area;
    k2=((Fin*signal)-((Fout)+((h/2)*k1)))/Area;
    k3=((Fin*signal)-((Fout)+((h/2)*k2)))/Area;
    k4=((Fin*signal)-((Fout)+(h*k3)))/Area;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  if(x[0]<0.00001) {
    x[0]=0;
  }
  return x[0];
}

function TemperaturaTanque(CITin_tanque, FlujoMasico_ac, CP_ac, Temp_ac_in, q_elect1, Masa_ac_in ) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];

  x[0]=CITin_tanque;

  for( j = 1; j < 25; j++ ) {

    k1=((FlujoMasico_ac*CP_ac*(Temp_ac_in-(x[j-1])))+q_elect1)/(Masa_ac_in*CP_ac);
    k2=((FlujoMasico_ac*CP_ac*(Temp_ac_in-(x[j-1]+((h/2)*k1))))+q_elect1)/(Masa_ac_in*CP_ac);
    k3=((FlujoMasico_ac*CP_ac*(Temp_ac_in-(x[j-1]+((h/2)*k2))))+q_elect1)/(Masa_ac_in*CP_ac);
    k4=((FlujoMasico_ac*CP_ac*(Temp_ac_in-(x[j-1]+((h)*k3))))+q_elect1)/(Masa_ac_in*CP_ac);

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }
  if( Masa_ac_in < 0.0001 ) {
    x[0] = 0;
  } else {
    x[0]=x[j-1];
  }
  return x[0];
}

function PresionBomba( ValMaxPre, TaoBomba, CIPBomba, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0] = CIPBomba;

  for(j=1;j<25;j++) {

    k1=((ValMaxPre*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxPre*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxPre*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxPre*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0] = x[j-1];
  if( x[0] < 0.00001 ) {
    x[0]=0;
  }
  return x[0];
}

function FlujoBomba( ValMaxFlujo, TaoBomba, CIFBomba, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CIFBomba;

  for(j=1;j<25;j++) {

    k1=((ValMaxFlujo*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxFlujo*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxFlujo*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxFlujo*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function FlujoBombaBarrido( ValMaxFlujoBarrido, TaoBombaBarrido, CIFBombaBarrido, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CIFBombaBarrido;

  for(j=1;j<25;j++) {

    k1=((ValMaxFlujoBarrido*signal)-(x[j-1]))/TaoBombaBarrido;
    k2=((ValMaxFlujoBarrido*signal)-(x[j-1]+((h/2)*k1)))/TaoBombaBarrido;
    k3=((ValMaxFlujoBarrido*signal)-(x[j-1]+((h/2)*k2)))/TaoBombaBarrido;
    k4=((ValMaxFlujoBarrido*signal)-(x[j-1]+((h)*k3)))/TaoBombaBarrido;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function TempSalidaInter( U_A_Tamb, CP_ac2, Tac_in, CITemp_ac, U_A, Masa_ac_CP_ac2, Densidad2, signal, CIFBombaBarrido) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [],
      FlujoMasico;

  FlujoMasico=(CIFBombaBarrido*signal)*Densidad2;


  x[0]=CITemp_ac;

  for(j=1;j<25;j++) {

    k1=((U_A_Tamb)+(FlujoMasico*CP_ac2*Tac_in)-(x[j-1]*(U_A+(FlujoMasico*CP_ac2))))/(Masa_ac_CP_ac2);
    k2=((U_A_Tamb)+(FlujoMasico*CP_ac2*Tac_in)-(x[j-1]*(U_A+(FlujoMasico*CP_ac2))+((h/2)*k1)))/(Masa_ac_CP_ac2);
    k3=((U_A_Tamb)+(FlujoMasico*CP_ac2*Tac_in)-(x[j-1]*(U_A+(FlujoMasico*CP_ac2))+((h/2)*k2)))/(Masa_ac_CP_ac2);
    k4=((U_A_Tamb)+(FlujoMasico*CP_ac2*Tac_in)-(x[j-1]*(U_A+(FlujoMasico*CP_ac2))+((h)*k3)))/(Masa_ac_CP_ac2);

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  if(x[0]<0.00001) {
        x[0]=0;
  }
    return x[0];
}

function Flujo_aire_carters( ValFlujo, TaoFlujo, CIFlujo, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0] = CIFlujo;

  for(j=1;j<25;j++) {

    k1=((ValFlujo*signal)-(x[j-1]))/TaoFlujo;
    k2=((ValFlujo*signal)-(x[j-1]+((h/2)*k1)))/TaoFlujo;
    k3=((ValFlujo*signal)-(x[j-1]+((h/2)*k2)))/TaoFlujo;
    k4=((ValFlujo*signal)-(x[j-1]+((h)*k3)))/TaoFlujo;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function TemperaturaCA( ValMaxTCA, TaoBomba, CITCA, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CITCA;

  for(j=1;j<25;j++) {

    k1=((ValMaxTCA*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxTCA*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxTCA*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxTCA*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function TemperaturaCB( ValMaxTCB, TaoBomba, CITCB, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CITCB;

  for(j=1;j<25;j++) {

    k1=((ValMaxTCB*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxTCB*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxTCB*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxTCB*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function TemperaturaCC( ValMaxTCC, TaoBomba, CITCC, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CITCC;

  for(j=1;j<25;j++) {

    k1=((ValMaxTCC*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxTCC*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxTCC*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxTCC*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function TemperaturaCD( ValMaxTCD, TaoBomba, CITCD, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CITCD;

  for(j=1;j<25;j++) {

    k1=((ValMaxTCD*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxTCD*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxTCD*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxTCD*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function TemperaturaCE( ValMaxTCE, TaoBomba, CITCE, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CITCE;

  for(j=1;j<25;j++) {

    k1=((ValMaxTCE*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxTCE*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxTCE*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxTCE*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function TemperaturaLUB( ValMaxTLUB, TaoBomba, CITLUB, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CITLUB;

  for(j=1;j<25;j++) {

    k1=((ValMaxTLUB*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxTLUB*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxTLUB*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxTLUB*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

function TemperaturaTAGB( ValMaxTAGB, TaoBomba, CITTAGB, signal) {
  var j,
      h = 0.05 / 100,
      k1, k2, k3, k4,
      x = [];


  x[0]=CITTAGB;

  for(j=1;j<25;j++) {

    k1=((ValMaxTAGB*signal)-(x[j-1]))/TaoBomba;
    k2=((ValMaxTAGB*signal)-(x[j-1]+((h/2)*k1)))/TaoBomba;
    k3=((ValMaxTAGB*signal)-(x[j-1]+((h/2)*k2)))/TaoBomba;
    k4=((ValMaxTAGB*signal)-(x[j-1]+((h)*k3)))/TaoBomba;

    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));
  }

  x[0]=x[j-1];
  /*if(x[0]<0.00001) {
      x[0]=0;
  }*/
  return x[0];
}

