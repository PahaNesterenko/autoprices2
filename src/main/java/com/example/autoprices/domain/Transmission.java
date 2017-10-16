package com.example.autoprices.domain;

public enum Transmission {

    MANUAL("Manual"),
    SEMI_AUTOMATIC("Semi-automatic"),
    AUTOMATIC("Automatic"),
    VARIATOR("Variator");

    String name;
    Transmission(String name) {
        this.name = name;
    }

}
