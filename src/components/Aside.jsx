import React from 'react'
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { MdOutlineSegment } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { IoCalendarOutline, IoStatsChartOutline } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";

import { Link } from 'react-router';
export const Aside = () => {

    return (
        <Drawer.Root>
            <Drawer.Trigger asChild>
                <Button variant="outline">
                    <MdOutlineSegment />
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>Menu</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Link to="/">
                                <Button variant="ghost"><IoStatsChartOutline /> Principal</Button>
                            </Link>
                            <Link to="/metas">
                                <Button variant="ghost"><GoGoal /> Metas Mensuales</Button>
                            </Link>
                            <br />
                            <br />
                            <br />
                            <p>En desarrollo...</p>
                            <Link to="/anual">
                                <Button variant="ghost" disabled><IoCalendarOutline /> Comparativo anual</Button>
                            </Link>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <p>Desarrollado por Sabogal </p>
                            <GrGithub></GrGithub>
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}
