import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeys } from "../../common/constants";
import { H3 } from "../common/typography";
import TextInput from "../common/input";
import { PrimaryButton } from "../common/buttons";

export interface ProjectFormProps {
  onSubmit: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = props => {
  const [projName, setProjName] = React.useState("");

  async function submitForm() {
    try {
      const p = await AsyncStorage.getItem(storageKeys.project);
      let projects: Array<IProject> = [];
      if (p) {
        projects = JSON.parse(p);
      }
      await AsyncStorage.setItem(
        storageKeys.project,
        JSON.stringify([...projects, { title: projName, id: new Date().toJSON() }])
      );

      props.onSubmit();
    } catch (e) {
      console.log("Error while saving projects", e);
    }
  }

  return (
    <>
      <H3>Add Project</H3>
      <TextInput label="Project Name" value={projName} onChangeText={val => setProjName(val)} />
      <PrimaryButton onPress={submitForm}>Submit</PrimaryButton>
    </>
  );
};

export default ProjectForm;
