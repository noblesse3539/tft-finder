import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Select,
  CheckboxGroup,
  HStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import * as Info from "./data";

export const App = () => {
  const [data, setData] = React.useState<Info.Champion[][]>([]);
  const [seletedLevel, setSelectedLevel] = React.useState<number>(1);
  const [checkedSyn, setCheckedSyn] = React.useState<string[]>([]);
  const [selectedStep, setSelectedStep] = React.useState<number[]>(
    Object.values(Info.Synergy).map((value) => value.steps[0])
  );
  const Synergy = Info.Synergy;

  const checkboxGroupOnChange = (checkedSynIds: string[]) => {
    setCheckedSyn(checkedSynIds);
  };

  React.useEffect(() => {
    // console.log(`${seletedLevel}\n${checkedSyn}\n${selectedStep}`);
  }, [seletedLevel, checkedSyn, selectedStep]);
  const selectStepOnChange = (e) => {
    const synId = parseInt(e.target.id.split("-")[2]);
    setSelectedStep((old) => [
      ...old.slice(0, synId),
      e.target.value,
      ...old.slice(synId + 1),
    ]);
  };

  const renderStepbySynId = (synId: Info.EnumSynergy) => (
    <Select
      id={`sel-syn-${synId}`}
      onChange={selectStepOnChange}
      defaultValue={selectedStep[synId]}
    >
      {Synergy[synId].steps.map((step) => (
        <option value={step}>{step}</option>
      ))}
    </Select>
  );

  const buttonOnClick = (e) => {
    const startTime = Date.now();
    const synOpt = checkedSyn.map((synId) => ({
      synergyId: parseInt(synId),
      step: selectedStep[parseInt(synId)],
    }));
    const find = Info.findRecipe(seletedLevel, synOpt, Info.SORT_OPTION.FREQ);
    const endTime = Date.now();
    console.log(
      `lv: ${seletedLevel} 걸린 시간: ${(endTime - startTime) / 1000}`
    );
    console.log(find);
  };
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Button colorScheme="teal" variant="solid" onClick={buttonOnClick}>
              Find
            </Button>
            <Select
              width="xs"
              placeholder="Select Level"
              defaultValue={1}
              onChange={(e) => setSelectedLevel(parseInt(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
            </Select>
            <CheckboxGroup colorScheme="green" onChange={checkboxGroupOnChange}>
              <HStack>
                {Object.entries(Synergy)
                  .slice(0, 12)
                  .map((entry) => {
                    const [key, value] = entry;
                    return (
                      <VStack>
                        <Checkbox value={key}>{value.lang[0]}</Checkbox>
                        {checkedSyn.includes(key) ? (
                          renderStepbySynId(key)
                        ) : (
                          <></>
                        )}
                      </VStack>
                    );
                  })}
              </HStack>
              <HStack>
                {Object.entries(Synergy)
                  .slice(12)
                  .map((entry) => {
                    const [key, value] = entry;
                    return (
                      <VStack>
                        <Checkbox value={key}>{value.lang[0]}</Checkbox>
                        {checkedSyn.includes(key) ? (
                          renderStepbySynId(key)
                        ) : (
                          <></>
                        )}
                      </VStack>
                    );
                  })}
              </HStack>
            </CheckboxGroup>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
