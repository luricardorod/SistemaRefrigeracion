#include <QtGui/QApplication>
#include "refrigeracion.h"

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    Refrigeracion w;
    w.show();

    return a.exec();
}
