import { Divider, Link, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import { BulletList, Paragraph } from "~/components/Text";

export const meta: MetaFunction = () => {
  return [
    { title: "Useful Models" },
    { name: "description", content: "Let's ramp up our general understanding of the world!" },
  ];
};

export default function Index() {
  return (
    <Stack spacing={2}>
      <Typography variant="h2" display="flex" justifyContent="center">Welcome to Useful Models</Typography>
      <Divider />
      <Paragraph>A model is a simplification of the reality. All of them are limited, and can only approximate reality up to a certain level. But they are the best tools we have to navigate the world's complexity.</Paragraph>
      <Paragraph>Some models are quite crude, and still pretty useful for our needs. "Objects fall straight down" is oversimplified, but still quite a useful model! No need for anything more elaborate to withdraw your foot out of the way of that hammer you just dropped. However, we sometimes need more complex models. Here are some possible reasons:</Paragraph>
      <BulletList>
        <ListItem>
          <ListItemText>
            <b>Tackling more general problems.</b> <Link target="_blank" href="https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion" rel="noreferrer" >Newton's laws of motion</Link> is one of the most succesful physical model.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Requirering more accuracy.</b> A <Link target="_blank" href="https://en.wikipedia.org/wiki/Tribology" rel="noreferrer" >tribology model</Link> might tell you how the hammer slipped out of your hands, and what kind of glove would have prevented that.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Tackling harder problems.</b> Some problems are surprisingly hard to model. Facial recognition is one of them.
          </ListItemText>
        </ListItem>
      </BulletList>
      <Paragraph>Hopefully, our brain come prewired for this last one! But it not always the case, and some models require meticulous expertise (and powerfull computers) to be used.</Paragraph>
      <Paragraph>As long as you know how close to reality you need to be, models are one of our best tools to understand the world around us. But here is my favorite part: It turned out that <b>models that were developped for fluid dynamics described well traffic jams. Models that were developped for economics worked well for politics. Finance for medecine. Internet for ecology. Enginering for neuroscience. And much more!</b> Models have been incredibly versatile and effective across various fields, and understanding models helps you understand all sciences at the same time.</Paragraph>
      <Paragraph><i>Are you ready to discover some of the most useful models to understand today's world? Let's go!</i></Paragraph>
    </Stack>
  );
}
