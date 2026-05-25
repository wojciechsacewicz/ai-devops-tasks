#!/bin/bash

if systemctl is-active --quiet docker; then
    echo "Docker działa."
else
    echo "Docker nie działa. Próba uruchomienia..."
    sudo systemctl start docker

    if systemctl is-active --quiet docker; then
        echo "Docker został uruchomiony."
    else
        echo "Nie udało się uruchomić Dockera."
        exit 1
    fi
fi
