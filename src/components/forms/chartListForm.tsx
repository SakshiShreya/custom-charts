import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeys } from "../../common/constants";
import { H3 } from "../common/typography";
import TextInput from "../common/input";
import { PrimaryButton } from "../common/buttons";

export interface ChartListFormProps {
  onSubmit: () => void;
}

const ChartListForm: React.FC<ChartListFormProps> = props => {
  const [chartName, setChartName] = React.useState("");

  async function submitForm() {
    try {
      const p = await AsyncStorage.getItem(storageKeys.chartList);
      let chartList: Array<IChartList> = [];
      if (p) {
        chartList = JSON.parse(p);
      }
      await AsyncStorage.setItem(
        storageKeys.chartList,
        JSON.stringify([...chartList, { title: chartName, id: new Date().toJSON() }])
      );

      props.onSubmit();
    } catch (e) {
      console.log("Error while saving chartList", e);
    }
  }

  return (
    <>
      <H3>Add Chart</H3>
      <TextInput label="Chart Name" value={chartName} onChangeText={val => setChartName(val)} />
      <PrimaryButton onPress={submitForm}>Submit</PrimaryButton>
    </>
  );
};

export default ChartListForm;
