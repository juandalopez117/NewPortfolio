"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Box from "@mui/material/Box";
import { List, ListItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function AlternateReverseTimeline({ area }) {
  const { t, i18n } = useTranslation("experienceMain");
  console.log(area);
  return (
    <Timeline
      position="alternate-reverse"
      sx={{
        position: "absolute",
        top: 0,
        padding: "2rem 1rem",
      }}
    >
      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "2rem",
          fontWeight: 500,
          color: "black",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        {t(`${area}.title`)}
      </Typography>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.3rem",
            }}
          >
            {t(`${area}.jobs.title`)}
          </Typography>

          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.2rem",
            }}
          >
            {t(`${area}.jobs.company`)}
          </Typography>

          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.2rem",
            }}
          >
            {t(`${area}.jobs.date`)}
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
            }}
          >
            <List>
              {Array.from(
                { length: t(`${area}.jobs.tasks.length`) },
                (_, i) => i
              ).map((i) => (
                <ListItem
                  key={i}
                  sx={{
                    fontFamily: "unset",
                    fontSize: "1rem",
                    textAlign: "right",
                  }}
                >
                  {t(`${area}.jobs.tasks.${[i]}`)}
                </ListItem>
              ))}
            </List>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/*  */}
      {/*    <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.3rem",
            }}
          >
            Experience 2
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            eos dignissimos, est aperiam nesciunt quidem quis fugiat quam
            molestias? cucimus impedit cupiditate magni excepturi molestiae ad,
            ab dicta repellendus voluptate?
          </Typography>
        </TimelineContent>
      </TimelineItem> */}

      {/*  */}
      {/*    <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.3rem",
            }}
          >
            Experience 3
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            eos dignissimos, est aperiam nesciunt quidem quis fugiat quam
            molestias? cucimus impedit cupiditate magni excepturi molestiae ad,
            ab dicta repellendus voluptate?
          </Typography>
        </TimelineContent>
      </TimelineItem> */}

      {/*  */}
      {/*   <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.3rem",
            }}
          >
            Experience 4
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            eos dignissimos, est aperiam nesciunt quidem quis fugiat quam
            molestias? cucimus impedit cupiditate magni excepturi molestiae ad,
            ab dicta repellendus voluptate?
          </Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
