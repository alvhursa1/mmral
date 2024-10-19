"use client";

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion, useInView } from 'framer-motion'; // Importar motion y useInView
import { useRef, useState, useEffect } from 'react';

export default function CustomTimeline() {
  // useRef para rastrear los párrafos
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  // Estados para asegurarse de que la animación solo ocurra una vez
  const [hasBeenViewed1, setHasBeenViewed1] = useState(false);
  const [hasBeenViewed2, setHasBeenViewed2] = useState(false);
  const [hasBeenViewed3, setHasBeenViewed3] = useState(false);
  const [hasBeenViewed4, setHasBeenViewed4] = useState(false);
  const [hasBeenViewed5, setHasBeenViewed5] = useState(false);

  // Detectar cuándo están en vista
  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4 = useInView(ref4);
  const inView5 = useInView(ref5);

  // useEffect para establecer que la animación solo ocurra una vez
  useEffect(() => {
    if (inView1 && !hasBeenViewed1) setHasBeenViewed1(true);
  }, [inView1, hasBeenViewed1]);

  useEffect(() => {
    if (inView2 && !hasBeenViewed2) setHasBeenViewed2(true);
  }, [inView2, hasBeenViewed2]);

  useEffect(() => {
    if (inView3 && !hasBeenViewed3) setHasBeenViewed3(true);
  }, [inView3, hasBeenViewed3]);

  useEffect(() => {
    if (inView4 && !hasBeenViewed4) setHasBeenViewed4(true);
  }, [inView4, hasBeenViewed4]);

  useEffect(() => {
    if (inView5 && !hasBeenViewed5) setHasBeenViewed5(true);
  }, [inView5, hasBeenViewed5]);

  return (
    <Timeline position="alternate">
      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
          <TimelineConnector
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
            Community-Driven
          </h2>
          <motion.p
            ref={ref1} // Referencia para rastrear
            className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[5%] md:pr-[15%] text-justify"
            initial={{ opacity: 0, y: 20 }} // Estado inicial
            animate={hasBeenViewed1 ? { opacity: 1, y: 0 } : {}} // Animación solo si está en vista
            transition={{ duration: 1 }} // Duración de la animación
          >
            Users can influence the platform’s direction by voting on future events using a native token.
          </motion.p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem position="right">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
          <TimelineConnector
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
            Community-Driven
          </h2>
          <motion.p
            ref={ref2}
            className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[15%] text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenViewed2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Users can influence the platform’s direction by voting on future events using a native token.
          </motion.p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
          <TimelineConnector
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
            Community-Driven
          </h2>
          <motion.p
            ref={ref3}
            className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[5%] md:pr-[15%] text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenViewed3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Users can influence the platform’s direction by voting on future events using a native token.
          </motion.p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem position="right">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
          <TimelineConnector
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
            Community-Driven
          </h2>
          <motion.p
            ref={ref4}
            className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[15%] text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenViewed4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Users can influence the platform’s direction by voting on future events using a native token.
          </motion.p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
            Community-Driven
          </h2>
          <motion.p
            ref={ref5}
            className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[5%] md:pr-[15%] text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenViewed5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Users can influence the platform’s direction by voting on future events using a native token.
          </motion.p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
