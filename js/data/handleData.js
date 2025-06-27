import data from '../../assets/data/exampleProjects.json' with { type: 'json' };

const projects = [];

const getData = (() => {
    for (const project of data) {
        projects.push(project);
    }
})();

export default {projects}; 