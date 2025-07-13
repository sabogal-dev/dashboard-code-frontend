import React from 'react'
import { useNavigate } from 'react-router';

import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { MdOutlineSegment } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { IoCalendarOutline, IoStatsChartOutline } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";

export const Aside = () => {

    let navigate = useNavigate();

    function handleClick(url) {
        navigate(`/${url}`);
    }
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
                            <Button variant="ghost" onClick={()=>{handleClick("dashboard")}}><IoStatsChartOutline /> Principal</Button>
                            <Button variant="ghost" onClick={()=>{handleClick("metas")}}><GoGoal /> Metas Mensuales</Button>
                            <br />
                            <br />
                            <br />
                            <p>En desarrollo...</p>
                            <Button variant="ghost" disabled><IoCalendarOutline /> Comparativo anual</Button>
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
