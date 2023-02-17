import React from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import s from './particles.module.scss'


export const Particle = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main)
    }
    const particlesLoaded = async (container: any) => {

    }
    return (
        <Particles
            className={s.particle}
            id={'tsparticles'}
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                    fullScreen: {
                        enable: false,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: '#272a2f',
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'grab',
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.5,
                                size: 40,
                            },
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#ff014f',
                        },
                        links: {
                            color: '#ff014f',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'out',
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }
            }
        />
    );
};

