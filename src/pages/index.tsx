import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import SliderComponent from "../components/home-slider";
import ArticleComponent from "../components/article-card";
import IntroductionComponent from "../components/introduction";
import SpaceComponent from "../components/space";
import HomeBannerImage from "../components/home-banner-image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";

const articleList = (
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6 place-items-center align-middle">
    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage
          src="../images/mother_with_baby.jpg"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Mother with a baby on her back by Asiphile Mkhwenkwe
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          In this photograph, in the background is an old lady selling chicken
          feet. Children are coming back from...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage
          src="../images/mama_africa_restaurant.jpg"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          “Mama African Food Restaurant” by Zethu Sobetwa
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          In this picture I can say I see a few businesses; people are trying to
          make a life...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage src="../images/grown_up.jpg" alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          I had to be a grown up at an early age by Lilitha Mejeni
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          I had to be a grown up at an early age. Mama is a drunkard; all she
          does is...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage src="../images/image00026.jpg" alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Umlilo ka December 2020 by Chumani Sibebosi
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          iMasiphumelele yilokishana encinci esecaleni kwe Capri Village . Le
          lokishi ihlala abantu abangamahlwempu...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage src="../images/school.jpg" alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Ukhanyo Primary School
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          Ukhanyo Primary School was founded in 1993, by Mrs Nikiwe Ndyalivane,
          a Masiphumelele resident and teacher, who served as the school’s first
          principle...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage src="../images/image00010.jpg" alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Businesses by Anelisa Mtikiti
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          In Masiphumelele we have so many local businesses such as barber
          shops, cosmetics stores, spaza shops, and shops that sell fast
          foods/street food...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage src="../images/image00009.jpg" alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Black folks are the best swimmers on Earth by Zintle Magazi
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          There is an unmatched resilience that rests in the belly of townships.
          The resilience I am talking about is...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage
          src="../images/township_delicacies.jpg"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Township Delicacies by Asiphile Mkhwenkwe
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          In Masiphumelele we have people who come from different places, live
          different lifestyles and eat different types of foods...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <StaticImage src="../images/image00006.jpg" alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          The History of Masiphumelele
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          <p>
            “When did we arrive here? Was it 93 or 94?” The two women quiz each
            other trying to remember the exact year of their arrival to this
            place...
          </p>
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>
  </div>
);

const poemList = [
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6 place-items-center align-middle">
    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Me by Lilitha Mejene
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          Mna ke ndiyintombi yomXhosa xho. Ndingu Mbathane, Uxesibe,
          uKhandanyawana, uMatshaya, uMatshinayibheke njengo mntwana...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Ndomelele (I am strong)
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          Ndiyile ntombi ndiyiyo nje, ndiqeqeshiwe, ndakhuliswa, ndayalwa. Mna
          ndikhulele eCala kwilali yase Mbenge, ndikhuliswa yintombi yakwa Gcina
          ezala umama...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Ubuqu bam by Chumani Sibebosi
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          <p>
            Ndingu Mxhosa ongagnwengwangwa <br />
            Andile xhoba loxhatshazawa ngemvelaphi yam <br />
            Xa ubala obhala abathwaxwe ba...
          </p>
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          My perplexing life by Chumani Sibebosi
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          <p>
            I had to grow fast <br />
            It was a must <br />I had to man up at an early age...
          </p>
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          The Love I had for you by Chumani Sibebosi
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          <p>
            I used to think of you <br />
            You were the only hope I had <br />
            You were the only who understood me...
          </p>
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Where do young broken-hearted women go? By Zintle Magazi
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          <p>
            The ones who have been so fiercely rejected. <br />
            Where do they hide and where do they recharge?...
          </p>
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>

    <Card className="max-w-[24rem] overflow-hidden rounded-none">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Umama by Chumani Sibebosi
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          <p>
            Ndibonge bani xa ndingabongi wena <br />
            Ndithande bani xa ndigathandi wena <br />
            Ndithembe bani dingathembi wenn a...
          </p>
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-b-8 border-black">
        <Typography className="font-normal">Read full story</Typography>
      </CardFooter>
    </Card>
  </div>,
];
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <SliderComponent></SliderComponent>
      {/* Main content div */}
      <div>
        <SpaceComponent></SpaceComponent>
        <IntroductionComponent></IntroductionComponent>

        <SpaceComponent></SpaceComponent>
        <HomeBannerImage></HomeBannerImage>

        <SpaceComponent></SpaceComponent>

        <div className="sm:mx-8 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16">
          <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
            <h1 className="font-bold text-3xl">STORIES</h1>
          </div>
        </div>
        <div className="my-5">{articleList}</div>

        <div className="sm:mx-8 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16 mt-32">
          <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
            <h1 className="font-bold text-3xl">POEMS</h1>
          </div>
        </div>
        <div className="my-5">{poemList}</div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Masiphumelele</title>
    <meta name="description" content="Your description" />
  </>
);
