import { Box, Button, Center, Image, Text, BackgroundImage } from "@mantine/core";
import bgImg from '../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
export default function Home() {
  return (
    <>
     <Box sx={{ width: '100%', height: 800 }} mx="auto">
      <BackgroundImage
        src={bgImg}
      
        sx={(theme) => ({
          height: '100%',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Center p="md" sx={{ height: '90%'}}>
        <Text  
          component="span"
          align="center"
          variant="gradient"
          gradient={{ from: 'cyan', to: 'teal', deg: 45 }}
          sx={(theme) => ({
          fontSize: '6rem',

          textShadow: `0 0 20px rgba(51, 155, 230, 0.8),
          10px 10px 5px rgba(51, 155, 240, 0.6)
          `
          })}
          size="xl"
          weight={700}>
            My name is Eivydas
          </Text>
        </Center>
      </BackgroundImage>
    </Box>


    
</>
  );
}
