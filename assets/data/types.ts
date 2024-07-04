import focus from './focus.json';
import about from './about.json';
import process from './process.json';
import projects from './projects.json';

export type FocusCard = typeof focus[number];
export type AboutCard = typeof about[number];
export type ProcessCard = typeof process[number];
export type ProjectCard = typeof projects[number];