import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function CustomTimeline() {
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
          <p className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[5%] md:pr-[15%] text-justify">
            Users can influence the platform’s direction by voting on future events using a native token.
          </p>
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
          <p className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[15%] text-justify">
            Users can influence the platform’s direction by voting on future events using a native token.
          </p>
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
          <p className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[5%] md:pr-[15%] text-justify">
            Users can influence the platform’s direction by voting on future events using a native token.
          </p>
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
          <p className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[15%] text-justify">
            Users can influence the platform’s direction by voting on future events using a native token.
          </p>
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
          <p className="font-satoshi-regular pt-4 text-[1rem] text-[#000] md:pl-[5%] md:pr-[15%] text-justify">
            Users can influence the platform’s direction by voting on future events using a native token.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}