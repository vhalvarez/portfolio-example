import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyle = styled.div`
    text-align: center;
    .servicesItem__icon {
        svg {
            width: 3rem;
        }
    }

    .servicesItem__title {
        font-size: 2.5rem;
        font-family: "Montserrat SemiBold";
    }

    .para {
        margin-top: 2rem;
    }
`;

const ServicesSectionItem = ({
    icon = <MdDesktopMac />,
    title = "Lorem, ipsum.",
    desc = "Lorem ipsum dolor sit amet.",
}) => {
    return (
        <ItemStyle>
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{desc}</PText>
        </ItemStyle>
    );
};

export default ServicesSectionItem;
