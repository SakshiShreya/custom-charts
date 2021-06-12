import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, View } from "react-native";
import commonStyles, { em } from "../common/commonStyles";
import { storageKeys } from "../common/constants";
import { NoBgButton, PrimaryButton } from "../components/common/buttons";
import { H1, P } from "../components/common/typography";
import Popup from "../components/common/popup";
import ProjectForm from "../components/forms/projectForm";
import { FontAwesome } from "@expo/vector-icons";

export interface ProjectsScreenProps {}

const ProjectsScreen: React.FC<ProjectsScreenProps> = props => {
  const [projects, setProjects] = React.useState<Array<IProject>>([]);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  async function getProjects() {
    const p = await AsyncStorage.getItem(storageKeys.project);
    setProjects(p ? JSON.parse(p) : []);
  }

  React.useEffect(() => {
    getProjects();
  }, []);

  function handleProjectAdd() {
    hideModal();
    getProjects();
  }

  function deleteProject(index: number) {
    const p = [...projects];

    p.splice(index, 1);

    setProjects(p);
    AsyncStorage.setItem(storageKeys.project, JSON.stringify(p));
  }

  function listItem({ item, index }: ListRenderItemInfo<IProject>) {
    return (
      <View style={styles.listItem}>
        <Pressable onPress={() => console.log("open", index, ". ", item)} style={styles.p}>
          <P>{item.title}</P>
        </Pressable>
        <NoBgButton onPress={() => deleteProject(index)} mini>
          <FontAwesome name="trash" style={styles.icon} />
        </NoBgButton>
      </View>
    );
  }

  return (
    <React.Fragment>
      <Popup onClose={hideModal} visible={visible}>
        <ProjectForm onSubmit={handleProjectAdd} />
      </Popup>

      <View style={{ ...commonStyles.container }}>
        <H1>Projects Screen</H1>

        <View style={styles.addCont}>
          <PrimaryButton onPress={showModal}>Add</PrimaryButton>
        </View>

        <View style={styles.listCont}>
          <FlatList data={projects} renderItem={listItem} keyExtractor={item => item.id} />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  addCont: {
    width: 80
  },
  listCont: {
    marginTop: em
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },
  p: {
    paddingVertical: 0.25 * em,
    flex: 1,
  },
  icon: {
    fontSize: 1.2 * em
  }
});

export default ProjectsScreen;
