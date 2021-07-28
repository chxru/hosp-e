import React, { useState } from "react";
import Head from "next/head";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface patient_registerProps {
  firstname: string;
  lastname: string;
  gender: "male" | "female" | "other";
  address: string;
  nic: string;
  email: string;
  contactnumber: number;
  emergencyno: number;
  password: string;
  re_password: string;
  dob: String;
}

const PatientRegister: React.FC = ({}) => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm<patient_registerProps>();
  const onSubmit = (values: patient_registerProps) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Hosp - e : patient_register</title>
      </Head>
      <Flex bgColor="#86F0D3">
        <Flex
          width="100%"
          margin="24px"
          borderWidth="3px"
          borderColor="white"
          borderRadius="lg"
          zIndex="popover"
          bgColor="white"
          justify="center"
          alignItems="center"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid
              width="100%"
              height="-moz-min-content"
              columns={{ sm: 1, md: 2 }}
              spacingX="60px"
              spacingY="40px"
            >
              {/* First name */}
              <FormControl isRequired id="firstname">
                <FormLabel htmlFor="firstname">First Name</FormLabel>
                <Input {...register("firstname")} type="text" />
              </FormControl>

              {/* Last name */}
              <FormControl isRequired id="lastname">
                <FormLabel htmlFor="lastname">Last Name</FormLabel>
                <Input {...register("lastname")} type="text" />
              </FormControl>

              {/* Gender */}
              <FormControl as="fieldset" isRequired id="gender">
                <FormLabel as="legend"> Gender </FormLabel>
                <RadioGroup name="gender" defaultValue="male">
                  <HStack spacing="50px">
                    <Radio value="male" {...register("gender")}>
                      Male
                    </Radio>
                    <Radio value="female" {...register("gender")}>
                      Female
                    </Radio>
                    <Radio value="other" {...register("gender")}>
                      Other
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              {/* DOB */}
              <FormControl isRequired id="dob">
                <FormLabel htmlFor="dob">Date Of Birth</FormLabel>
                <Input {...register("dob")} type="text" />
              </FormControl>

              {/* Address */}
              <FormControl isRequired id="address">
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input {...register("address")} type="text" />
              </FormControl>

              {/* nic */}
              <FormControl isRequired id="nic">
                <FormLabel htmlFor="nic">NIC Number</FormLabel>
                <Input {...register("nic")} type="text" />
              </FormControl>

              {/* email */}
              <FormControl isRequired id="email">
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...register("email")} type="email" />
              </FormControl>

              {/* Contact Number*/}
              <FormControl isRequired id="contactnumber">
                <FormLabel htmlFor="contactnumber">Contact Number</FormLabel>
                <Input {...register("contactnumber")} type="number" />
              </FormControl>

              {/* Emergency Number */}
              <FormControl isRequired id="emergencyno">
                <FormLabel htmlFor="emergencyno">Emergency Number</FormLabel>
                <Input {...register("emergencyno")} type="number" />
              </FormControl>
              <FormControl />

              {/* Password */}
              <FormControl isRequired id="password">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input {...register("password")} type="password"></Input>
              </FormControl>

              {/* Recheack the password */}
              <FormControl isRequired id="re_password">
                <FormLabel htmlFor="re_password">
                  Retype your Password
                </FormLabel>
                <Input {...register("re_password")} type="password"></Input>
              </FormControl>
            </SimpleGrid>

            {/* Button group */}
            <Center marginTop="14">
              <Button type="submit" colorScheme="whatsapp" marginX="3">
                Submit
              </Button>
              <Button type="reset" marginX="3">
                Reset
              </Button>
            </Center>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default PatientRegister;
