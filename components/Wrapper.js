import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcGoogle,
  FcIdea,
  FcNews,
} from "react-icons/fc";
import {
  AiOutlineGithub,
  AiOutlineSearch,
  AiOutlineGoogle,
} from "react-icons/ai";
import {
  SiMozilla,
  SiKaggle,
  SiFreecodecamp,
  SiAcm,
  SiGutenberg,
  SiUdemy,
  SiCoursera,
} from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiMaterialsScience } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { MdDeveloperMode, MdOutlineScience } from "react-icons/md";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Link href={href} isExternal>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"GDSC VEC"}
            icon={<Icon as={AiOutlineGoogle} w={10} h={10} />}
            description={
              "Google Developer Student Club (GDSC) Velammal Engineering College is a technical community group focusing on enhancing, extending and enriching students of all departments in the field of Software Development. By joining us, people can improve their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community"
            }
            href={
              "https://gdsc.community.dev/velammal-engineering-college-chennai/"
            }
          />
          <Card
            heading={"Kaggle"}
            icon={<Icon as={SiKaggle} w={10} h={10} />}
            description={
              "Kaggle offers a no-setup, customizable, Jupyter Notebooks environment. Access GPUs at no cost to you and a huge repository of community published data & code. A great place to start if you are new to data science and machine learning."
            }
            href={"https://www.kaggle.com/"}
          />
          <Card
            heading={"W3 Schools"}
            icon={<Icon as={MdSchool} w={10} h={10} />}
            description={
              "W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples"
            }
            href={"https://www.w3schools.com/"}
          />
          <Card
            heading={"Github"}
            icon={<Icon as={AiOutlineGithub} w={10} h={10} />}
            description={
              "GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community and manage thousands for projects"
            }
            href={"https://github.com/"}
          />
          <Card
            heading={"Roadmap.sh"}
            icon={<Icon as={FcIdea} w={10} h={10} />}
            description={
              "roadmap.sh is a community effort to create roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings."
            }
            href={"https://roadmap.sh/"}
          />

          <Card
            heading={"Udemy"}
            icon={<Icon as={SiUdemy} w={10} h={10} />}
            description={
              "Udemy is an online learning and teaching marketplace with over 213000 courses and 62 million students. Learn programming, marketing, data science and more."
            }
            href={"https://www.udemy.com/"}
          />
          <Card
            heading={"Coursera"}
            icon={<Icon as={SiCoursera} w={10} h={10} />}
            description={
              "Learn online and earn valuable credentials from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM. Join Coursera for free and transform your career with degrees, certificates, Specializations, & MOOCs in data science, computer science, business, and dozens of other topics."
            }
            href={"https://www.coursera.org/"}
          />

          <Card
            heading={"freecodecamp"}
            icon={<Icon as={SiFreecodecamp} w={10} h={10} />}
            description={
              "Every aspect of freeCodeCamp is 100% free. The courses, the projects, and even the certifications. "
            }
            href={"https://www.freecodecamp.org/"}
          />

          <Card
            heading={"Devdocs"}
            icon={<Icon as={AiOutlineSearch} w={10} h={10} />}
            description={
              "Fast,  and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++"
            }
            href={"https://devdocs.io/"}
          />
          <Card
            heading={"MIT opencourseware"}
            icon={<Icon as={FaUniversity} w={10} h={10} />}
            description={
              "MIT OpenCourseWare is a web based publication of virtually all MIT course content. OCW is open and available to the world and is a permanent MIT activity."
            }
            href={"https://ocw.mit.edu/"}
          />
          <Card
            heading={"Google Summer of Code"}
            icon={<Icon as={FcGoogle} w={10} h={10} />}
            description={
              "Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors."
            }
            href={"https://summerofcode.withgoogle.com/"}
          />
          <Card
            heading={"Association for Computing Machinery"}
            icon={<Icon as={SiAcm} w={10} h={10} />}
            description={
              "ACM, the world largest educational and scientific computing society, delivers resources that advance computing as a science and a profession."
            }
            href={"https://www.acm.org/"}
          />

          <Card
            heading={"Free For Developers"}
            icon={<Icon as={MdDeveloperMode} w={10} h={10} />}
            description={
              "This is a list of software (SaaS, PaaS, IaaS, etc.) and other offerings that have free tiers for developers."
            }
            href={"https://free-for.dev/"}
          />
          <Card
            heading={"Project Gutenberg"}
            icon={<Icon as={SiGutenberg} w={10} h={10} />}
            description={
              'Project Gutenberg is a volunteer effort to digitize and archive cultural works, as well as to "encourage the creation and distribution of eBooks'
            }
            href={"https://www.gutenberg.org/"}
          />
          <Card
            heading={"PhET Interactive Simulations"}
            icon={<Icon as={GiMaterialsScience} w={10} h={10} />}
            description={
              "PhET Interactive Simulations, a project at the University of Colorado Boulder, is a non-profit open educational resource project that creates and hosts explorable explanations. "
            }
            href={"https://phet.colorado.edu/"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
