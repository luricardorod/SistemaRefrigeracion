/****************************************************************************
** Meta object code from reading C++ file 'refrigeracion.h'
**
** Created: Fri 8. Nov 13:01:56 2013
**      by: The Qt Meta Object Compiler version 62 (Qt 4.7.0)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../SistemaRefrigeracion/refrigeracion.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'refrigeracion.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 62
#error "This file was generated using the moc from 4.7.0. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
static const uint qt_meta_data_Refrigeracion[] = {

 // content:
       5,       // revision
       0,       // classname
       0,    0, // classinfo
       2,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: signature, parameters, type, tag, flags
      15,   14,   14,   14, 0x0a,
      23,   14,   14,   14, 0x0a,

       0        // eod
};

static const char qt_meta_stringdata_Refrigeracion[] = {
    "Refrigeracion\0\0onOff()\0modelo()\0"
};

const QMetaObject Refrigeracion::staticMetaObject = {
    { &QMainWindow::staticMetaObject, qt_meta_stringdata_Refrigeracion,
      qt_meta_data_Refrigeracion, 0 }
};

#ifdef Q_NO_DATA_RELOCATION
const QMetaObject &Refrigeracion::getStaticMetaObject() { return staticMetaObject; }
#endif //Q_NO_DATA_RELOCATION

const QMetaObject *Refrigeracion::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->metaObject : &staticMetaObject;
}

void *Refrigeracion::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_Refrigeracion))
        return static_cast<void*>(const_cast< Refrigeracion*>(this));
    return QMainWindow::qt_metacast(_clname);
}

int Refrigeracion::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QMainWindow::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        switch (_id) {
        case 0: onOff(); break;
        case 1: modelo(); break;
        default: ;
        }
        _id -= 2;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
