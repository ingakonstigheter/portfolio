import data from '../../assets/data/exampleProjects.json' with { type: 'json' };

const projects = [];

 const getProjects = function() {
    for (const project of data) {
        projects.push(project);
    }
}();
export default {projects}; 