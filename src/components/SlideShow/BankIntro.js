import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./BankIntro.css"
import MagicCard from "./Quiz/Card";
import Emojislider from "./Quiz/Emojislider";
const BankIntro = () => {

    return (
        <div>
            <div className="flex-container">
                <h2 className={"logo"}>LEARN2EARN</h2>
                <div className="flex-mission-left">
                    {/* Credit Score Information */}
                    <Typography className="mission-header" variant="h3" gutterBottom>
                        Our Mission Statement
                    </Typography>
                    <Typography className="mission-statement" variant="h6" paragraph>
                        At learn2earn, we are dedicated to revolutionizing
                        college students' financial perception and literacy.
                        We dispel financial misconceptions and provide accessible
                        resources to create a financially savvy college community,
                        benefiting businesses and strengthening education. Join us in
                        empowering the next generation for a financially stable future.
                    </Typography>
                    <p className={"company-quote"}>
                        “Debt is a gift if leveraged correctly, so let it work for you and don’t work for debt.”-Chris Tate
                    </p>
                </div>
                <div className="flex-prompt-right">
                    <Typography className={"knowledge-title"} variant="h3" gutterBottom>
                        Before we begin our Interactive Assessment
                    </Typography>
                    <div className="transparent-box-question">
                                {/* Credit Score Information */}
                        <div>
                            <h2 className={"knowledge-caption"}>
                                Rank your knowledge on these topics
                            </h2>
                        </div>
                        <div>
                            <h2 className={"knowledge-sub"}>
                                Banking
                            </h2>
                            <Emojislider></Emojislider>
                        </div>
                        <div>
                            <h2 className={"knowledge-sub"}>
                                Investing
                            </h2>
                            <Emojislider></Emojislider>
                        </div>
                        <div>
                            <h2 className={"knowledge-sub"}>
                                Budgeting
                            </h2>
                            <Emojislider></Emojislider>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BankIntro;
