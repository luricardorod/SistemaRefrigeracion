#include "refrigeracion.h"
#include "ui_refrigeracion.h"
#include <QScrollBar>


Refrigeracion::Refrigeracion(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::Refrigeracion)
{
    ui->setupUi(this);
    Refrigeracion::Timer = new QTimer(this);
    Tiempo = 0;


    connect(this->ui->pushButtonOnOff,SIGNAL(clicked()),this,SLOT(onOff()));
    connect(Timer,SIGNAL(timeout()),this,SLOT(modelo()));
    this->ui->scrollArea1->x();





}

Refrigeracion::~Refrigeracion() {
  delete ui;
}

void Refrigeracion::modelo() {
  Tiempo = Tiempo + 1;
  inicialisacion();


  TRTB = TemperaturaRotorTurbinaDeBaja ( U1RTB, TgTB, U2RTB, TRCB, U3RTB, TlubTB, U4RTB, TgenfTB, mRTB, CPmaterialTB, CITRTB);
  TRTA = TemperaturaRotorTurbinadeAlta ( U1RTA, TgTA, U2RTA, TRCA, U3RTA, TlubTA, U4RTA, TgenfTA, mRTA, CPmaterialTA, CITRTA);


  this->ui->labelContador->setText(QString::number( Tiempo ));
  this->ui->labelTRTB->setText(QString::number ( TRTB ));
  this->ui->labelTRTA->setText(QString::number ( TRTA ));

}

void Refrigeracion::onOff() {

  if( Timer->isActive() ) {
    this->Timer->stop();
    this->ui->pushButtonOnOff->setText( "Play" );
  } else{
    this->Timer->start(1000);
    this->ui->pushButtonOnOff->setText( "Stop" );
  }
  return;
}

void Refrigeracion::inicialisacion() {

  //Temperatura Rotor turbina de baja
    U1RTB = this->ui->lineEditU1RTB->text().toDouble();
    TgTB = this->ui->lineEditTgTB->text().toDouble();
    U2RTB = this->ui->lineEditU2RTB->text().toDouble();
    TRCB = this->ui->lineEditTRCB->text().toDouble();
    U3RTB = this->ui->lineEditU3RTB->text().toDouble();
    TlubTB = this->ui->lineEditTlub->text().toDouble();
    U4RTB = this->ui->lineEditU4RTB->text().toDouble();
    TgenfTB = this->ui->lineEditTgenFB->text().toDouble();
    mRTB = this->ui->lineEditmRTB->text().toDouble();
    CPmaterialTB = this->ui->lineEditCPmaterial->text().toDouble();
    CITRTB = this->ui->lineEditCITRTB->text().toDouble();

  //Temperatura Rotor Turbina de alta
    U1RTA = this->ui->lineEditU1RTA->text().toDouble();
    TgTA = this->ui->lineEditTgTa->text().toDouble();
    U2RTA = this->ui->lineEditU2RTA->text().toDouble();
    TRCA = this->ui->lineEditTRCA->text().toDouble();
    U3RTA = this->ui->lineEditU3RTA->text().toDouble();
    TlubTA = this->ui->lineEditTlubTA->text().toDouble();
    U4RTA = this->ui->lineEditU4RTA->text().toDouble();
    TgenfTA = this->ui->lineEditTgenfTA->text().toDouble();
    mRTA = this->ui->lineEditmRTA->text().toDouble();
    CPmaterialTA = this->ui->lineEditCPmaterialTA->text().toDouble();
    CITRTA = this->ui->lineEditCITRTA->text().toDouble();
}



double Refrigeracion::TemperaturaRotorTurbinaDeBaja( double U1RTB, double TgTB, double U2RTB, double TRCB, double U3RTB, double Tlub, double U4RTB, double Tgenf, double mRTB, double CPmaterial, double CITRTB) {

  int j;
  double x[26];
  double h=0.05/100;
  double k1,k2,k3,k4;

  x[0] = CITRTB;

  for(j=1;j<25;j++) {

    k1 = ( U1RTB * ( TgTB - x[j-1] ) + U2RTB * ( TRCB - x[j-1] ) + U3RTB * ( Tlub - x[j-1]) + U4RTB * ( Tgenf - x[j-1] )) / (mRTB * CPmaterial);
    k2 = ( U1RTB * ( TgTB - ( x[j-1] + ((h/2) * k1) )) + U2RTB * ( TRCB - ( x[j-1] + ((h/2) * k1) )) + U3RTB * ( Tlub - ( x[j-1] + ((h/2) * k1))) + U4RTB * ( Tgenf - ( x[j-1] + ((h/2) * k1) ))) / (mRTB * CPmaterial);
    k3 = ( U1RTB * ( TgTB - ( x[j-1] + ((h/2) * k2) )) + U2RTB * ( TRCB - ( x[j-1] + ((h/2) * k2) )) + U3RTB * ( Tlub - ( x[j-1] + ((h/2) * k2)))+ U4RTB * ( Tgenf - ( x[j-1] + ((h/2) * k2) ))) / (mRTB * CPmaterial);
    k4 = ( U1RTB * ( TgTB - ( x[j-1] + (h * k3) )) + U2RTB * ( TRCB - ( x[j-1] + (h * k3)) ) + U3RTB * ( Tlub - ( x[j-1] + (h * k3))) + U4RTB * ( Tgenf - ( x[j-1] + (h * k3) ))) / (mRTB * CPmaterial);
    
    x[j]=x[j-1]+((h/6)*(k1+(2*k2)+(2*k3)+(k4)));

  }  
  
  if(CITRTB<0.0001) {
    x[0]=0; //Imprimir cuando esto pase 'Temperatura que tiende a menos infinito'
  } else if (CITRTB>=2000){
    x[0]=2000;//Imprimir temperatura incorrecta, 'temperatura en aumento hacia infinito'
  } else {
    x[0]=x[j-1];
  }
  return x[0];
}

double Refrigeracion::TemperaturaRotorTurbinadeAlta(double U1RTA,double TgTA,double U2RTA,double TRCA,double U3RTA,double Tlub,double U4RTA,double Tgenf,double mRTA,double CPmaterial,double CITRTA){
  int j;
  double x[26];
  double h=0.05/100;
  double k1,k2,k3,k4;

  x[0] = CITRTA;

  for(j=1;j<25;j++) {

        k1 = ( U1RTA * ( TgTA - x[j-1] ) + U2RTA * ( TRCA - x[j-1] ) + U3RTA * ( Tlub - x[j-1]) + U4RTA * ( Tgenf - x[j-1] )) / (mRTA * CPmaterial);
        k2 = ( U1RTA * ( TgTA - ( x[j-1] + ((h/2) * k1) )) + U2RTA * ( TRCA - ( x[j-1] + ((h/2) * k1) )) + U3RTA * ( Tlub - ( x[j-1] + ((h/2) * k1))) + U4RTA * ( Tgenf - ( x[j-1] + ((h/2) * k1) ))) / (mRTA * CPmaterial);
        k3 = ( U1RTA * ( TgTA - ( x[j-1] + ((h/2) * k2) )) + U2RTA * ( TRCA - ( x[j-1] + ((h/2) * k2) )) + U3RTA * ( Tlub - ( x[j-1] + ((h/2) * k2))) + U4RTA * ( Tgenf - ( x[j-1] + ((h/2) * k2) ))) / (mRTA * CPmaterial);
        k4 = ( U1RTA * ( TgTA - ( x[j-1] + (h * k3))) + U2RTA * ( TRCA - ( x[j-1] + (h * k3))) + U3RTA * ( Tlub - ( x[j-1] + (h * k3))) + U4RTA * ( Tgenf - ( x[j-1] + (h * k3) ))) / (mRTA * CPmaterial);
        
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

