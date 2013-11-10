/********************************************************************************
** Form generated from reading UI file 'refrigeracion.ui'
**
** Created: Fri 8. Nov 20:29:03 2013
**      by: Qt User Interface Compiler version 4.7.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_REFRIGERACION_H
#define UI_REFRIGERACION_H

#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QGridLayout>
#include <QtGui/QGroupBox>
#include <QtGui/QHBoxLayout>
#include <QtGui/QHeaderView>
#include <QtGui/QLabel>
#include <QtGui/QLineEdit>
#include <QtGui/QMainWindow>
#include <QtGui/QMenuBar>
#include <QtGui/QPushButton>
#include <QtGui/QScrollArea>
#include <QtGui/QStatusBar>
#include <QtGui/QToolBar>
#include <QtGui/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Refrigeracion
{
public:
    QWidget *centralWidget;
    QWidget *horizontalLayoutWidget;
    QHBoxLayout *horizontalLayout;
    QPushButton *pushButtonOnOff;
    QLabel *labelContador;
    QGroupBox *groupBox;
    QWidget *gridLayoutWidget;
    QGridLayout *gridLayout;
    QLineEdit *lineEditU1RTB;
    QLabel *label_3;
    QLabel *label_4;
    QLabel *label_5;
    QLabel *label_6;
    QLabel *label_8;
    QLabel *label_9;
    QLabel *label_10;
    QLabel *label_11;
    QLabel *label_12;
    QLabel *label_13;
    QLineEdit *lineEditTgTB;
    QLineEdit *lineEditU2RTB;
    QLineEdit *lineEditTRCB;
    QLineEdit *lineEditU3RTB;
    QLineEdit *lineEditTlub;
    QLineEdit *lineEditU4RTB;
    QLineEdit *lineEditTgenFB;
    QLineEdit *lineEditmRTB;
    QLineEdit *lineEditCPmaterial;
    QLineEdit *lineEditCITRTB;
    QLabel *label_2;
    QLabel *label;
    QLabel *labelTRTB;
    QGroupBox *groupBox_3;
    QWidget *gridLayoutWidget_3;
    QGridLayout *gridLayout_3;
    QLabel *label_24;
    QLineEdit *lineEditU1RTA;
    QLabel *label_25;
    QLabel *label_26;
    QLabel *label_27;
    QLabel *label_28;
    QLabel *label_29;
    QLabel *label_30;
    QLabel *label_31;
    QLabel *label_32;
    QLabel *label_33;
    QLabel *label_34;
    QLineEdit *lineEditTgTa;
    QLineEdit *lineEditU2RTA;
    QLineEdit *lineEditTRCA;
    QLineEdit *lineEditU3RTA;
    QLineEdit *lineEditTlubTA;
    QLineEdit *lineEditU4RTA;
    QLineEdit *lineEditTgenfTA;
    QLineEdit *lineEditmRTA;
    QLineEdit *lineEditCPmaterialTA;
    QLineEdit *lineEditCITRTA;
    QLabel *label_7;
    QLabel *labelTRTA;
    QScrollArea *scrollArea1;
    QWidget *scrollAreaWidgetContents;
    QLabel *label_14;
    QLabel *label_15;
    QMenuBar *menuBar;
    QToolBar *mainToolBar;
    QStatusBar *statusBar;

    void setupUi(QMainWindow *Refrigeracion)
    {
        if (Refrigeracion->objectName().isEmpty())
            Refrigeracion->setObjectName(QString::fromUtf8("Refrigeracion"));
        Refrigeracion->setEnabled(true);
        Refrigeracion->resize(900, 440);
        QSizePolicy sizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(Refrigeracion->sizePolicy().hasHeightForWidth());
        Refrigeracion->setSizePolicy(sizePolicy);
        Refrigeracion->setSizeIncrement(QSize(0, 0));
        Refrigeracion->setMouseTracking(false);
        Refrigeracion->setAcceptDrops(false);
        centralWidget = new QWidget(Refrigeracion);
        centralWidget->setObjectName(QString::fromUtf8("centralWidget"));
        horizontalLayoutWidget = new QWidget(centralWidget);
        horizontalLayoutWidget->setObjectName(QString::fromUtf8("horizontalLayoutWidget"));
        horizontalLayoutWidget->setGeometry(QRect(600, 170, 160, 31));
        horizontalLayout = new QHBoxLayout(horizontalLayoutWidget);
        horizontalLayout->setSpacing(6);
        horizontalLayout->setContentsMargins(11, 11, 11, 11);
        horizontalLayout->setObjectName(QString::fromUtf8("horizontalLayout"));
        horizontalLayout->setContentsMargins(0, 0, 0, 0);
        pushButtonOnOff = new QPushButton(horizontalLayoutWidget);
        pushButtonOnOff->setObjectName(QString::fromUtf8("pushButtonOnOff"));

        horizontalLayout->addWidget(pushButtonOnOff);

        labelContador = new QLabel(horizontalLayoutWidget);
        labelContador->setObjectName(QString::fromUtf8("labelContador"));
        labelContador->setAlignment(Qt::AlignCenter);

        horizontalLayout->addWidget(labelContador);

        groupBox = new QGroupBox(centralWidget);
        groupBox->setObjectName(QString::fromUtf8("groupBox"));
        groupBox->setGeometry(QRect(10, 10, 221, 371));
        groupBox->setAlignment(Qt::AlignCenter);
        groupBox->setFlat(false);
        groupBox->setCheckable(false);
        gridLayoutWidget = new QWidget(groupBox);
        gridLayoutWidget->setObjectName(QString::fromUtf8("gridLayoutWidget"));
        gridLayoutWidget->setGeometry(QRect(30, 20, 160, 334));
        gridLayout = new QGridLayout(gridLayoutWidget);
        gridLayout->setSpacing(6);
        gridLayout->setContentsMargins(11, 11, 11, 11);
        gridLayout->setObjectName(QString::fromUtf8("gridLayout"));
        gridLayout->setHorizontalSpacing(2);
        gridLayout->setVerticalSpacing(11);
        gridLayout->setContentsMargins(0, 0, 0, 0);
        lineEditU1RTB = new QLineEdit(gridLayoutWidget);
        lineEditU1RTB->setObjectName(QString::fromUtf8("lineEditU1RTB"));

        gridLayout->addWidget(lineEditU1RTB, 1, 1, 1, 1);

        label_3 = new QLabel(gridLayoutWidget);
        label_3->setObjectName(QString::fromUtf8("label_3"));

        gridLayout->addWidget(label_3, 2, 0, 1, 1);

        label_4 = new QLabel(gridLayoutWidget);
        label_4->setObjectName(QString::fromUtf8("label_4"));

        gridLayout->addWidget(label_4, 3, 0, 1, 1);

        label_5 = new QLabel(gridLayoutWidget);
        label_5->setObjectName(QString::fromUtf8("label_5"));

        gridLayout->addWidget(label_5, 4, 0, 1, 1);

        label_6 = new QLabel(gridLayoutWidget);
        label_6->setObjectName(QString::fromUtf8("label_6"));

        gridLayout->addWidget(label_6, 5, 0, 1, 1);

        label_8 = new QLabel(gridLayoutWidget);
        label_8->setObjectName(QString::fromUtf8("label_8"));

        gridLayout->addWidget(label_8, 6, 0, 1, 1);

        label_9 = new QLabel(gridLayoutWidget);
        label_9->setObjectName(QString::fromUtf8("label_9"));

        gridLayout->addWidget(label_9, 7, 0, 1, 1);

        label_10 = new QLabel(gridLayoutWidget);
        label_10->setObjectName(QString::fromUtf8("label_10"));

        gridLayout->addWidget(label_10, 8, 0, 1, 1);

        label_11 = new QLabel(gridLayoutWidget);
        label_11->setObjectName(QString::fromUtf8("label_11"));

        gridLayout->addWidget(label_11, 9, 0, 1, 1);

        label_12 = new QLabel(gridLayoutWidget);
        label_12->setObjectName(QString::fromUtf8("label_12"));

        gridLayout->addWidget(label_12, 10, 0, 1, 1);

        label_13 = new QLabel(gridLayoutWidget);
        label_13->setObjectName(QString::fromUtf8("label_13"));

        gridLayout->addWidget(label_13, 11, 0, 1, 1);

        lineEditTgTB = new QLineEdit(gridLayoutWidget);
        lineEditTgTB->setObjectName(QString::fromUtf8("lineEditTgTB"));

        gridLayout->addWidget(lineEditTgTB, 2, 1, 1, 1);

        lineEditU2RTB = new QLineEdit(gridLayoutWidget);
        lineEditU2RTB->setObjectName(QString::fromUtf8("lineEditU2RTB"));

        gridLayout->addWidget(lineEditU2RTB, 3, 1, 1, 1);

        lineEditTRCB = new QLineEdit(gridLayoutWidget);
        lineEditTRCB->setObjectName(QString::fromUtf8("lineEditTRCB"));

        gridLayout->addWidget(lineEditTRCB, 4, 1, 1, 1);

        lineEditU3RTB = new QLineEdit(gridLayoutWidget);
        lineEditU3RTB->setObjectName(QString::fromUtf8("lineEditU3RTB"));

        gridLayout->addWidget(lineEditU3RTB, 5, 1, 1, 1);

        lineEditTlub = new QLineEdit(gridLayoutWidget);
        lineEditTlub->setObjectName(QString::fromUtf8("lineEditTlub"));

        gridLayout->addWidget(lineEditTlub, 6, 1, 1, 1);

        lineEditU4RTB = new QLineEdit(gridLayoutWidget);
        lineEditU4RTB->setObjectName(QString::fromUtf8("lineEditU4RTB"));

        gridLayout->addWidget(lineEditU4RTB, 7, 1, 1, 1);

        lineEditTgenFB = new QLineEdit(gridLayoutWidget);
        lineEditTgenFB->setObjectName(QString::fromUtf8("lineEditTgenFB"));

        gridLayout->addWidget(lineEditTgenFB, 8, 1, 1, 1);

        lineEditmRTB = new QLineEdit(gridLayoutWidget);
        lineEditmRTB->setObjectName(QString::fromUtf8("lineEditmRTB"));

        gridLayout->addWidget(lineEditmRTB, 9, 1, 1, 1);

        lineEditCPmaterial = new QLineEdit(gridLayoutWidget);
        lineEditCPmaterial->setObjectName(QString::fromUtf8("lineEditCPmaterial"));

        gridLayout->addWidget(lineEditCPmaterial, 10, 1, 1, 1);

        lineEditCITRTB = new QLineEdit(gridLayoutWidget);
        lineEditCITRTB->setObjectName(QString::fromUtf8("lineEditCITRTB"));

        gridLayout->addWidget(lineEditCITRTB, 11, 1, 1, 1);

        label_2 = new QLabel(gridLayoutWidget);
        label_2->setObjectName(QString::fromUtf8("label_2"));

        gridLayout->addWidget(label_2, 1, 0, 1, 1);

        label = new QLabel(centralWidget);
        label->setObjectName(QString::fromUtf8("label"));
        label->setGeometry(QRect(460, 10, 211, 16));
        labelTRTB = new QLabel(centralWidget);
        labelTRTB->setObjectName(QString::fromUtf8("labelTRTB"));
        labelTRTB->setGeometry(QRect(680, 10, 46, 13));
        groupBox_3 = new QGroupBox(centralWidget);
        groupBox_3->setObjectName(QString::fromUtf8("groupBox_3"));
        groupBox_3->setGeometry(QRect(230, 10, 221, 371));
        groupBox_3->setAlignment(Qt::AlignCenter);
        groupBox_3->setFlat(false);
        groupBox_3->setCheckable(false);
        gridLayoutWidget_3 = new QWidget(groupBox_3);
        gridLayoutWidget_3->setObjectName(QString::fromUtf8("gridLayoutWidget_3"));
        gridLayoutWidget_3->setGeometry(QRect(30, 20, 160, 334));
        gridLayout_3 = new QGridLayout(gridLayoutWidget_3);
        gridLayout_3->setSpacing(6);
        gridLayout_3->setContentsMargins(11, 11, 11, 11);
        gridLayout_3->setObjectName(QString::fromUtf8("gridLayout_3"));
        gridLayout_3->setHorizontalSpacing(2);
        gridLayout_3->setVerticalSpacing(11);
        gridLayout_3->setContentsMargins(0, 0, 0, 0);
        label_24 = new QLabel(gridLayoutWidget_3);
        label_24->setObjectName(QString::fromUtf8("label_24"));

        gridLayout_3->addWidget(label_24, 1, 0, 1, 1);

        lineEditU1RTA = new QLineEdit(gridLayoutWidget_3);
        lineEditU1RTA->setObjectName(QString::fromUtf8("lineEditU1RTA"));

        gridLayout_3->addWidget(lineEditU1RTA, 1, 1, 1, 1);

        label_25 = new QLabel(gridLayoutWidget_3);
        label_25->setObjectName(QString::fromUtf8("label_25"));

        gridLayout_3->addWidget(label_25, 2, 0, 1, 1);

        label_26 = new QLabel(gridLayoutWidget_3);
        label_26->setObjectName(QString::fromUtf8("label_26"));

        gridLayout_3->addWidget(label_26, 3, 0, 1, 1);

        label_27 = new QLabel(gridLayoutWidget_3);
        label_27->setObjectName(QString::fromUtf8("label_27"));

        gridLayout_3->addWidget(label_27, 4, 0, 1, 1);

        label_28 = new QLabel(gridLayoutWidget_3);
        label_28->setObjectName(QString::fromUtf8("label_28"));

        gridLayout_3->addWidget(label_28, 5, 0, 1, 1);

        label_29 = new QLabel(gridLayoutWidget_3);
        label_29->setObjectName(QString::fromUtf8("label_29"));

        gridLayout_3->addWidget(label_29, 6, 0, 1, 1);

        label_30 = new QLabel(gridLayoutWidget_3);
        label_30->setObjectName(QString::fromUtf8("label_30"));

        gridLayout_3->addWidget(label_30, 7, 0, 1, 1);

        label_31 = new QLabel(gridLayoutWidget_3);
        label_31->setObjectName(QString::fromUtf8("label_31"));

        gridLayout_3->addWidget(label_31, 8, 0, 1, 1);

        label_32 = new QLabel(gridLayoutWidget_3);
        label_32->setObjectName(QString::fromUtf8("label_32"));

        gridLayout_3->addWidget(label_32, 9, 0, 1, 1);

        label_33 = new QLabel(gridLayoutWidget_3);
        label_33->setObjectName(QString::fromUtf8("label_33"));

        gridLayout_3->addWidget(label_33, 10, 0, 1, 1);

        label_34 = new QLabel(gridLayoutWidget_3);
        label_34->setObjectName(QString::fromUtf8("label_34"));

        gridLayout_3->addWidget(label_34, 11, 0, 1, 1);

        lineEditTgTa = new QLineEdit(gridLayoutWidget_3);
        lineEditTgTa->setObjectName(QString::fromUtf8("lineEditTgTa"));

        gridLayout_3->addWidget(lineEditTgTa, 2, 1, 1, 1);

        lineEditU2RTA = new QLineEdit(gridLayoutWidget_3);
        lineEditU2RTA->setObjectName(QString::fromUtf8("lineEditU2RTA"));

        gridLayout_3->addWidget(lineEditU2RTA, 3, 1, 1, 1);

        lineEditTRCA = new QLineEdit(gridLayoutWidget_3);
        lineEditTRCA->setObjectName(QString::fromUtf8("lineEditTRCA"));

        gridLayout_3->addWidget(lineEditTRCA, 4, 1, 1, 1);

        lineEditU3RTA = new QLineEdit(gridLayoutWidget_3);
        lineEditU3RTA->setObjectName(QString::fromUtf8("lineEditU3RTA"));

        gridLayout_3->addWidget(lineEditU3RTA, 5, 1, 1, 1);

        lineEditTlubTA = new QLineEdit(gridLayoutWidget_3);
        lineEditTlubTA->setObjectName(QString::fromUtf8("lineEditTlubTA"));

        gridLayout_3->addWidget(lineEditTlubTA, 6, 1, 1, 1);

        lineEditU4RTA = new QLineEdit(gridLayoutWidget_3);
        lineEditU4RTA->setObjectName(QString::fromUtf8("lineEditU4RTA"));

        gridLayout_3->addWidget(lineEditU4RTA, 7, 1, 1, 1);

        lineEditTgenfTA = new QLineEdit(gridLayoutWidget_3);
        lineEditTgenfTA->setObjectName(QString::fromUtf8("lineEditTgenfTA"));

        gridLayout_3->addWidget(lineEditTgenfTA, 8, 1, 1, 1);

        lineEditmRTA = new QLineEdit(gridLayoutWidget_3);
        lineEditmRTA->setObjectName(QString::fromUtf8("lineEditmRTA"));

        gridLayout_3->addWidget(lineEditmRTA, 9, 1, 1, 1);

        lineEditCPmaterialTA = new QLineEdit(gridLayoutWidget_3);
        lineEditCPmaterialTA->setObjectName(QString::fromUtf8("lineEditCPmaterialTA"));

        gridLayout_3->addWidget(lineEditCPmaterialTA, 10, 1, 1, 1);

        lineEditCITRTA = new QLineEdit(gridLayoutWidget_3);
        lineEditCITRTA->setObjectName(QString::fromUtf8("lineEditCITRTA"));

        gridLayout_3->addWidget(lineEditCITRTA, 11, 1, 1, 1);

        label_7 = new QLabel(centralWidget);
        label_7->setObjectName(QString::fromUtf8("label_7"));
        label_7->setGeometry(QRect(460, 30, 211, 16));
        labelTRTA = new QLabel(centralWidget);
        labelTRTA->setObjectName(QString::fromUtf8("labelTRTA"));
        labelTRTA->setGeometry(QRect(680, 30, 46, 13));
        scrollArea1 = new QScrollArea(centralWidget);
        scrollArea1->setObjectName(QString::fromUtf8("scrollArea1"));
        scrollArea1->setGeometry(QRect(550, 250, 100, 71));
        QSizePolicy sizePolicy1(QSizePolicy::Expanding, QSizePolicy::Expanding);
        sizePolicy1.setHorizontalStretch(8);
        sizePolicy1.setVerticalStretch(7);
        sizePolicy1.setHeightForWidth(scrollArea1->sizePolicy().hasHeightForWidth());
        scrollArea1->setSizePolicy(sizePolicy1);
        scrollArea1->setLineWidth(-5);
        scrollArea1->setVerticalScrollBarPolicy(Qt::ScrollBarAsNeeded);
        scrollArea1->setHorizontalScrollBarPolicy(Qt::ScrollBarAsNeeded);
        scrollArea1->setWidgetResizable(true);
        scrollArea1->setAlignment(Qt::AlignCenter);
        scrollAreaWidgetContents = new QWidget();
        scrollAreaWidgetContents->setObjectName(QString::fromUtf8("scrollAreaWidgetContents"));
        scrollAreaWidgetContents->setGeometry(QRect(0, 0, 98, 69));
        label_14 = new QLabel(scrollAreaWidgetContents);
        label_14->setObjectName(QString::fromUtf8("label_14"));
        label_14->setGeometry(QRect(60, 30, 46, 13));
        label_15 = new QLabel(scrollAreaWidgetContents);
        label_15->setObjectName(QString::fromUtf8("label_15"));
        label_15->setGeometry(QRect(30, 50, 46, 13));
        scrollArea1->setWidget(scrollAreaWidgetContents);
        Refrigeracion->setCentralWidget(centralWidget);
        menuBar = new QMenuBar(Refrigeracion);
        menuBar->setObjectName(QString::fromUtf8("menuBar"));
        menuBar->setGeometry(QRect(0, 0, 900, 21));
        Refrigeracion->setMenuBar(menuBar);
        mainToolBar = new QToolBar(Refrigeracion);
        mainToolBar->setObjectName(QString::fromUtf8("mainToolBar"));
        Refrigeracion->addToolBar(Qt::TopToolBarArea, mainToolBar);
        statusBar = new QStatusBar(Refrigeracion);
        statusBar->setObjectName(QString::fromUtf8("statusBar"));
        Refrigeracion->setStatusBar(statusBar);

        retranslateUi(Refrigeracion);

        QMetaObject::connectSlotsByName(Refrigeracion);
    } // setupUi

    void retranslateUi(QMainWindow *Refrigeracion)
    {
        Refrigeracion->setWindowTitle(QApplication::translate("Refrigeracion", "Refrigeracion", 0, QApplication::UnicodeUTF8));
        pushButtonOnOff->setText(QApplication::translate("Refrigeracion", "Play", 0, QApplication::UnicodeUTF8));
        labelContador->setText(QApplication::translate("Refrigeracion", "0", 0, QApplication::UnicodeUTF8));
        groupBox->setTitle(QApplication::translate("Refrigeracion", "Temperatura de Rotor de turbina de baja", 0, QApplication::UnicodeUTF8));
        lineEditU1RTB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        label_3->setText(QApplication::translate("Refrigeracion", "TgTB", 0, QApplication::UnicodeUTF8));
        label_4->setText(QApplication::translate("Refrigeracion", "U2RTB", 0, QApplication::UnicodeUTF8));
        label_5->setText(QApplication::translate("Refrigeracion", "TRCB", 0, QApplication::UnicodeUTF8));
        label_6->setText(QApplication::translate("Refrigeracion", "U3RTB", 0, QApplication::UnicodeUTF8));
        label_8->setText(QApplication::translate("Refrigeracion", "Tlub", 0, QApplication::UnicodeUTF8));
        label_9->setText(QApplication::translate("Refrigeracion", "U4RTB", 0, QApplication::UnicodeUTF8));
        label_10->setText(QApplication::translate("Refrigeracion", "TgenfB", 0, QApplication::UnicodeUTF8));
        label_11->setText(QApplication::translate("Refrigeracion", "mRTB", 0, QApplication::UnicodeUTF8));
        label_12->setText(QApplication::translate("Refrigeracion", "CPmaterial", 0, QApplication::UnicodeUTF8));
        label_13->setText(QApplication::translate("Refrigeracion", "CITRTB", 0, QApplication::UnicodeUTF8));
        lineEditTgTB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditU2RTB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditTRCB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditU3RTB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditTlub->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditU4RTB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditTgenFB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditmRTB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditCPmaterial->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditCITRTB->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        label_2->setText(QApplication::translate("Refrigeracion", "U1RTB", 0, QApplication::UnicodeUTF8));
        label->setText(QApplication::translate("Refrigeracion", "Temperatura de Rotor de turbina de baja =", 0, QApplication::UnicodeUTF8));
        labelTRTB->setText(QApplication::translate("Refrigeracion", "0", 0, QApplication::UnicodeUTF8));
        groupBox_3->setTitle(QApplication::translate("Refrigeracion", "Temperatura de Rotor de turbina de Alta", 0, QApplication::UnicodeUTF8));
        label_24->setText(QApplication::translate("Refrigeracion", "U1RTA", 0, QApplication::UnicodeUTF8));
        lineEditU1RTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        label_25->setText(QApplication::translate("Refrigeracion", "TgTA", 0, QApplication::UnicodeUTF8));
        label_26->setText(QApplication::translate("Refrigeracion", "U2RTA", 0, QApplication::UnicodeUTF8));
        label_27->setText(QApplication::translate("Refrigeracion", "TRCA", 0, QApplication::UnicodeUTF8));
        label_28->setText(QApplication::translate("Refrigeracion", "U3RTA", 0, QApplication::UnicodeUTF8));
        label_29->setText(QApplication::translate("Refrigeracion", "TlubTA", 0, QApplication::UnicodeUTF8));
        label_30->setText(QApplication::translate("Refrigeracion", "U4RTA", 0, QApplication::UnicodeUTF8));
        label_31->setText(QApplication::translate("Refrigeracion", "TgenfTA", 0, QApplication::UnicodeUTF8));
        label_32->setText(QApplication::translate("Refrigeracion", "mRTA", 0, QApplication::UnicodeUTF8));
        label_33->setText(QApplication::translate("Refrigeracion", "CPmaterialTA", 0, QApplication::UnicodeUTF8));
        label_34->setText(QApplication::translate("Refrigeracion", "CITRTA", 0, QApplication::UnicodeUTF8));
        lineEditTgTa->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditU2RTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditTRCA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditU3RTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditTlubTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditU4RTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditTgenfTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditmRTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditCPmaterialTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        lineEditCITRTA->setText(QApplication::translate("Refrigeracion", "1", 0, QApplication::UnicodeUTF8));
        label_7->setText(QApplication::translate("Refrigeracion", "Temperatura de Rotor de turbina de Alta =", 0, QApplication::UnicodeUTF8));
        labelTRTA->setText(QApplication::translate("Refrigeracion", "0", 0, QApplication::UnicodeUTF8));
        label_14->setText(QApplication::translate("Refrigeracion", "TextLabel", 0, QApplication::UnicodeUTF8));
        label_15->setText(QApplication::translate("Refrigeracion", "TextLabel", 0, QApplication::UnicodeUTF8));
    } // retranslateUi

};

namespace Ui {
    class Refrigeracion: public Ui_Refrigeracion {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_REFRIGERACION_H
