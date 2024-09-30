import {
  REST,
  type RESTPostAPIChatInputApplicationCommandsJSONBody,
  Routes,
} from "discord.js";
import { config } from "dotenv";

import Logger from "./logger";

import type Slash from "../structure/command";
import Load from "./Loader";
config();

if (process.env.TOKEN === undefined) throw new Error("TOKEN is not defined.");

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

async function RegisterSlashes(): Promise<void> {
  const slashes: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
  await Load<Slash>("slashes", (slash) => slashes.push(slash.data.toJSON()));

  Logger("Started refreshing application (/) commands.", "yellow");

  if (process.env.CLIENT_ID === undefined)
    throw new Error("CLIENT_ID is not defined.");

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: slashes,
  });
}

RegisterSlashes()
  .then(() => {
    Logger("Registered Slashes.", "green");
  })
  .catch(() => {
    Logger("Failed to register Slashes.", "red");
  });
