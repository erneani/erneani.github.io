import React from 'react';
import styled from 'styled-components';

import { Section, SectionHeader, SectionTitle } from '../styles/Variables';

const SectionBody = styled.div`
	justify-content: space-evenly;
	flex-direction: column;
	font-family: 'Open Sans', sans serif;
	display: flex;
	width: 100%;
`;

const FormationTimeline = styled.ul`
	list-style: none;
`;

const TimelineItem = styled.li`
	font-size: 24px;
	margin: 1rem 0;
	color: #454545;

	i {
		color: #8000ff;
	}
`;

const Warning = styled.h4`
	font-weight: 400;
	text-align: left;
	font-size: 10px;
	padding: 0 2rem;
`;

const CertificationBoard = styled.ul`
	
`;

export const Formation = () => {
	return (
		<Section>
			<SectionHeader align="right" id="formation">
				<SectionTitle color="#8000ff">Minha formação</SectionTitle>
			</SectionHeader>
			<SectionBody>
				<FormationTimeline>
					<TimelineItem><i className="fas fa-school"></i> Ensino Fundamental - SECAT</TimelineItem>
					<TimelineItem><i className="fas fa-desktop"></i> Informática - IFRN, Campi Ceará-Mirim</TimelineItem>
					<TimelineItem><i className="fas fa-file-code"></i> Informática para WEB - IMD*</TimelineItem>
					<TimelineItem><i className="fas fa-code"></i> Graduação em TI*</TimelineItem>
					<Warning>* = Em curso</Warning>
				</FormationTimeline>
				<CertificationBoard>

				</CertificationBoard>
			</SectionBody>
		</Section>
	);
}