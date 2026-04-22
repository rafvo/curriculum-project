<script lang="ts" setup>
import { Main } from "@/components/main";
import { Header } from "@/components/header";
import { Section } from "@/components/section";
import { Icon } from "@/components/icons";
import { defineProps } from "vue";
import type { Curriculum } from "@/composables/use-versions/types";

const props = defineProps<{
  curriculum: Curriculum;
}>();

function savePdf() {
  globalThis.print();
}
</script>

<template>
  <div class="w-100">
    <Header.Root class="px-4 sm:px-20 print:px-[0.6cm] print:pt-[0.6cm]">
      <Header.Title>
        {{ props.curriculum.name }}
      </Header.Title>

      <Header.Subtitle class="text-center">
        {{ props.curriculum.profession }}
      </Header.Subtitle>

      <Header.Subtitle class="flex text-center">
        <Icon.Location class="w-3 mr-2 shrink-0" />
        {{ props.curriculum.location }}
      </Header.Subtitle>
    </Header.Root>

    <Main.Root class="container mx-auto max-w-[46rem] print:max-w-full px-4 sm:px-0 print:px-[0.6cm] print:pb-[0.6cm]">
      <Section.Root>
        <div class="grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-5 mt-4">
          <Section.Content class="col-span-1">
            <Section.Title>
              {{ props.curriculum.contact.title }}
            </Section.Title>

            <Section.ListItem>
              <Section.Item class="flex">
                <Icon.Email class="w-5 mr-2 shrink-0" />
                <Section.Link
                  class="min-w-0 break-all"
                  :href="`mailto:${props.curriculum.contact.email}`"
                  target="_blank"
                >
                  {{ props.curriculum.contact.email }}
                </Section.Link>
              </Section.Item>

              <Section.Item class="flex">
                <Icon.Whatsapp class="w-5 mr-2 shrink-0" />
                <Section.Link
                  class="min-w-0 break-all"
                  :href="`https://wa.me/${props.curriculum.contact.whatsapp.cleanNumber}`"
                  target="_blank"
                >
                  {{ props.curriculum.contact.whatsapp.number }}
                </Section.Link>
              </Section.Item>

              <Section.Item class="flex">
                <Icon.Linkedin class="w-5 mr-2 shrink-0" />
                <Section.Link
                  class="min-w-0 break-all"
                  :href="props.curriculum.contact.linkedin.url"
                  target="_blank"
                >
                  {{ props.curriculum.contact.linkedin.title }}
                </Section.Link>
              </Section.Item>

              <Section.Item class="flex">
                <Icon.Github class="w-5 mr-2 shrink-0" />
                <Section.Link
                  class="min-w-0 break-all"
                  :href="props.curriculum.contact.github.url"
                  target="_blank"
                >
                  {{ props.curriculum.contact.github.title }}
                </Section.Link>
              </Section.Item>
            </Section.ListItem>
          </Section.Content>

          <Section.Content class="col-span-1 sm:justify-self-center">
            <Section.Title>
              {{ props.curriculum.languages.title }}
            </Section.Title>

            <Section.ListItem>
              <Section.Item
                v-for="item in props.curriculum.languages.items"
                :key="item.id"
              >
                <Section.Text>{{ item.name }} ({{ item.level }})</Section.Text>
              </Section.Item>
            </Section.ListItem>
          </Section.Content>

          <Section.Content class="col-span-1">
            <Section.Title>
              {{ props.curriculum.curriculumProject.title }}
            </Section.Title>

            <Section.ListItem>
              <Section.Item>
                <Section.Link
                  :href="props.curriculum.curriculumProject.url"
                  target="_blank"
                >
                  {{ props.curriculum.curriculumProject.name }}
                </Section.Link>
                <Section.Infotext>
                  {{ props.curriculum.curriculumProject.description }}
                </Section.Infotext>
              </Section.Item>
            </Section.ListItem>
          </Section.Content>
        </div>

        <Section.Content>
          <Section.Title>
            {{ props.curriculum.about.title }}
          </Section.Title>

          <Section.Text class="text-center text-bold">
            {{ props.curriculum.about.description }}
          </Section.Text>
        </Section.Content>

        <Section.Content>
          <Section.Title>
            {{ props.curriculum.competences.title }}
          </Section.Title>

          <Section.Text class="text-center text-bold">
            {{ props.curriculum.competences.items.join(" · ") }}
          </Section.Text>
        </Section.Content>

        <Section.Content>
          <Section.Title>
            {{ props.curriculum.experiences.title }}
          </Section.Title>

          <Section.Col
            v-for="item in props.curriculum.experiences.items"
            :key="item.id"
          >
            <Section.Subtitle>
              {{ item.position }}
            </Section.Subtitle>

            <Section.Text>
              {{ item.company }} · {{ item.typeOfEmployment }}
            </Section.Text>

            <Section.Subtext>
              {{ item.startedIn }} - {{ item.endedIn }}

              <template v-if="item.duration"> · {{ item.duration }} </template>

              · {{ item.typeOfLocation }}
            </Section.Subtext>

            <Section.Text v-for="description in item.description">
              {{ description }}
            </Section.Text>

            <Section.Text v-if="item.competences">
              <strong>{{ item.competences.title }}:</strong>
              {{ item.competences.items.join(" · ") }}
            </Section.Text>
          </Section.Col>
        </Section.Content>

        <Section.Content>
          <Section.Title>
            {{ props.curriculum.academicTraining.title }}
          </Section.Title>

          <Section.ListItem>
            <Section.Item
              v-for="item in props.curriculum.academicTraining.items"
              :key="item.id"
            >
              <SectionText>
                {{ item.endedIn }} <small>({{ item.status }})</small> -
                {{ item.course }}, {{ item.institution }}
                <small>({{ item.level }})</small>
              </SectionText>
            </Section.Item>
          </Section.ListItem>
        </Section.Content>

        <Section.Content>
          <Section.Title>
            {{ props.curriculum.complementaryCourses.title }}
          </Section.Title>

          <Section.ListItem>
            <Section.Item
              v-for="item in props.curriculum.complementaryCourses.items"
              :key="item.id"
            >
              <SectionText>
                {{ item.endedIn }} <small>({{ item.status }})</small> -
                {{ item.course }}, {{ item.institution }}
              </SectionText>
            </Section.Item>
          </Section.ListItem>
        </Section.Content>
      </Section.Root>
    </Main.Root>

    <button
      class="fixed bottom-6 right-6 flex items-center gap-2 bg-primary text-tertiary px-4 py-2 rounded-lg shadow-lg hover:opacity-80 transition-opacity print:hidden"
      @click="savePdf"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
      </svg>
      Salvar PDF
    </button>
  </div>
</template>
