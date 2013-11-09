#ifndef REFRIGERACION_H
#define REFRIGERACION_H

#include <QMainWindow>
#include <Qtimer>

namespace Ui {
    class Refrigeracion;
}

class Refrigeracion : public QMainWindow
{
    Q_OBJECT

public:
    explicit Refrigeracion(QWidget *parent = 0);
    ~Refrigeracion();

    QTimer *Timer;
    double TemperaturaRotorTurbinaDeBaja( double U1RTB, double TgTB, double U2RTB, double TRCB, double U3RTB, double Tlub, double U4RTB, double TgenfB, double mRTB, double CPmaterial, double CITRTB);
    double TemperaturaRotorTurbinadeAlta(double U1RTA,double TgTA,double U2RTA,double TRCA,double U3RTA,double Tlub,double U4RTA,double TgenfA,double mRTA,double CPmaterial,double CITRTA);
    
    void inicialisacion();

public slots:

    void onOff();
    void modelo();

private:
    Ui::Refrigeracion *ui;
    double Tiempo;

  // Variables de Temperatura Rotor de turbina de baja
    double U1RTB;              // Coeficientes de transferencia de calor, los cuales serán móviles para sintonización
    double TgTB;               // Temperatura de Aire a la entrada de la turbina
    double U2RTB;              // Coeficientes de transferencia de calor, los cuales serán móviles para sintonización
    double TRCB;               // Temperatura de Rotor de compresor de baja
    double U3RTB;              // Coeficientes de transferencia de calor, los cuales serán móviles para sintonización
    double TlubTB;               // Temperatura de aceite de lubricación
    double U4RTB;              // Coeficientes de transferencia de calor, los cuales serán móviles para sintonización
    double TgenfTB;              // Temperatura de aire de entrada en los alabes para enfriamiento, igual a la temperatura de extracción
    double mRTB;               // Masa de Rotor de Turbina de Baja
    double CPmaterialTB;         // Capacidad Calorífica del metal del rotor
    double CITRTB;             // Condiciones iniciales de temperatura de rotor de turbina de baja
    double TRTB;               // Temperatura de Rotor de Turbina de Baja

  // Variables de Temperatura Rotor de Turbina de Alta
    double U1RTA;
    double TgTA;
    double U2RTA;
    double TRCA;
    double U3RTA;
    double TlubTA;
    double U4RTA;
    double TgenfTA;
    double mRTA;
    double CPmaterialTA;
    double CITRTA;
    double TRTA;

};

#endif // REFRIGERACION_H
