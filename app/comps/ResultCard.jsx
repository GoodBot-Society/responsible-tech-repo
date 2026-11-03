"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle } from "lucide-react";
import Link from "next/link";

import Modal from "../comps/Modal/Modal";

const ResultCard = ({ data }) => {
  const date = new Date(data.modified_on);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const id =
    data.organization_id ||
    data.litigation_id ||
    data.policy_id ||
    data.resource_id ||
    data.stakeholder_id;

  const getCircleColor = () => {
    if (data.organization_id) {
      return "text-goodbot-primary-purple"; // Color for organization
    }
    if (data.litigation_id) {
      return "text-goodbot-primary-red"; // Color for litigation
    }
    if (data.policy_id) {
      return "text-goodbot-primary-blue"; // Color for policy
    }
    if (data.resource_id) {
      return "text-goodbot-primary-yellow"; // Color for resource
    }
    if (data.stakeholder_id) {
      return "text-goodbot-primary-pink"; // Color for stakeholder
    }
    return "text-sky-400 fill-sky-400"; // Default color
  };
  const circleColor = getCircleColor();

  return (
    <Card>
      <CardHeader>
        <CardTitle className>{data.name}</CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data.summary}</p>
      </CardContent>
      <CardFooter>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle className={`mr-1 h-3 w-3 ${circleColor}`} />
            {data.tableName}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
