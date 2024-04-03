"use client";

import { Container, HStack } from "@chakra-ui/react";
import { Statistic, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import LottieAnimation from "./LottieAnimation";

const { Title } = Typography;

const server = 'https://twelve-data1.p.rapidapi.com';
const apiKey = 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033'; // Replace this with your actual API key

const Homepage = () => {
  const [homepage, setHomepage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomepage = async () => {
      try {
        const response = await axios.get(`${server}/stocks`, {
          headers: {
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
          }
        });

        // Check if the response contains the expected data structure
        if (response.data && response.data.data) {
          setHomepage(response.data.data); // Set the fetched stocks
          setLoading(false);
          console.log(response.data);
        } else {
          throw new Error('Invalid data format received from the API');
        }
      } catch (error) {
        console.error('Error fetching homepage data:', error);
        setError('Failed to fetch homepage data. Please try again later.');
        setLoading(false);
      }
    };

    fetchHomepage();
  }, []);

  return (
    <>
    {/* <LottieAnimation/> */}
      <div className="flex flex-col  items-center" >


        <Title level={2} className="heading">Stocks stats</Title>
        <div className="flex items-center h-96 mb-28">
          <Container maxW={"container.xl"}>
            {loading ? (
              <Loader />
            ) : error ? (
              <div>{error}</div>
            ) : homepage.length === 0 ? (
              <div>No data available</div>
            ) : (
              <HStack spacing={4}>
                <Statistic title="Total stocks" value={homepage.length} />
              </HStack>
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Homepage;