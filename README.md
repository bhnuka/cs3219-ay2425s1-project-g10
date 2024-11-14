[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/bzPrOe11)
# CS3219 Project (PeerPrep) - AY2425S1
## Group: G10

### Instructions to set up the code locally 
1. Clone the project repository from GitHub and go to root directory of project
git clone https://github.com/CS3219-AY2425S1/cs3219-ay2425s1-project-g10.git
cd cs3219-ay2425s1-project-g10/
2. Frontend Setup (in root directory)
cd frontend/
3. Install the necessary dependencies (in frontend directory)
npm install
4. Start the frontend server (in frontend directory)
npm run dev
5. Transfer over .env files to respective root directory (i.e. collab-service .env file should be placed in collab-service folder, etc.)
6/. Backend Setup  (in root directory)
run the docker compose command in the next part (preferably in another terminal)

### Commands used to spin up the container(s)
1. Run docker compose routine in new terminal
In a new terminal, open the root directory of the project, i.e cs3219-ay2425s1-project-g10/
cd  cs3219-ay2425s1-project-g10/
2. Run the docker compose yaml file
docker compose up
3. Cleanup (Optional)
After testing/using, you can stop and remove the containers, networks, and images by running the following command:
docker-compose down --rmi all
