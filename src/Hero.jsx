"use client"
import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const Hero = () => {
    const canvasRef = useRef(null);
    const gradientRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            "colors": [
        {
            "color": "#C9C9C9",
            "enabled": true
        },
        {
            "color": "#AFAFAF",
            "enabled": true
        },
        {
            "color": "#17E7FF",
            "enabled": false
        },
        {
            "color": "#BDBCBF",
            "enabled": true
        },
        {
            "color": "#f5e1e5",
            "enabled": false
        }
    ],
    "speed": 2,
    "horizontalPressure": 2,
    "verticalPressure": 5,
    "waveFrequencyX": 2,
    "waveFrequencyY": 2,
    "waveAmplitude": 5,
    "shadows": 10,
    "highlights": 8,
    "colorBrightness": 1,
    "colorSaturation": 10,
    "wireframe": false,
    "colorBlending": 6,
    "backgroundColor": "#003FFF",
    "backgroundAlpha": 1,
    "resolution": 0.95

        });

        return () => gradientRef.current?.destroy();
    }, []);

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
            <canvas
                style={{
                    isolation: "isolate",
                    height: "100%",
                    width: "100%",
                }}
                ref={canvasRef}
            />
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                zIndex: 1
            }}>
                <h1>Hero Section</h1>
            </div>
        </div>
    );
};

export default Hero;
