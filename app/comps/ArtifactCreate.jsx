/* eslint-disable func-style */
"use client";
import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm, useState } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// I need to know the data types of the keys in the tagInfoScheme
const tagSchema =  z.string().refine((value) => /^\d+$/.test(value), {
  message: 'Tags must be numeric.',});
// const datetime = z.date().datetime();
// Which data should be create/update on ArtifactCreate.jsx?
// Where should be stay this component?
// How can I see those keys data types?
//
const formSchema = z.object({
  name: z.string().min(1).max(40),
  website: z.string().url(),
  summary: z.string().min(1).max(255),
  legal_status: z.string().min(1).max(255),
  affiliation: z.string().min(1).max(255),
  functional_role: z.string().min(1).max(255),
  sector_focus: z.string().min(1).max(255),
  scope: z.string().min(1).max(255),
  communities_of_focus: z.string(),
  geographic_mandate: z.string(),
  hq_province: z.string().min(1).max(255),
  hq_city: z.string().min(1).max(255),
  status: z.string().min(1).max(255),
  stage: z.string().min(1).max(255),
  composition: z.string().min(1).max(255),
  size: z.string().min(1).max(255),
  established_date: z.date(),
  created_by: z.string().min(1).max(255),//will this be auto-generated by artifact creator's login name?

  tags: z.array(tagSchema), //will tags be an array of a _numberic format? tags will be pre-defined in the database?
});



const status = [
  {
    value: "open",
    label: "Open",
  },
  {
    value: "in-progress",
    label: "In progress",
  },
]
export default function ArtifactCreate() {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState(null);



  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      key334: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="" placeholder="Name" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="Website" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Input placeholder="summary" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="affiliation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Affiliation</FormLabel>
              <FormControl>
                <Input placeholder="affiliation" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="scope"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scope</FormLabel>
              <FormControl>
                <Input placeholder="scope" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="communities_of_focus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Communities of Focus</FormLabel>
              <FormControl>
                <Input placeholder="communities_of_focus" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="geographic_mandate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Geographic Mandate</FormLabel>
              <FormControl>
                <Input placeholder="geographic_mandate" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hq_province"
          render={({ field }) => (
            <FormItem>
              <FormLabel>HQ Province</FormLabel>
              <FormControl>
                <Input placeholder="hq_province" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hq_city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>HQ City</FormLabel>
              <FormControl>
                <Input placeholder="hq_city" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
        control={form.control}
        name="status"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Status</FormLabel>
            <FormControl>
              <Input placeholder="status" {...field} />
            </FormControl>
            <FormDescription></FormDescription>
            <FormMessage />
          </FormItem>
        )}
        />
        <FormField
          control={form.control}
          name="stage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stage</FormLabel>
              <FormControl>
                <Input placeholder="stage" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField

          control={form.control}
          name="composition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Composition</FormLabel>
              <FormControl>
                <Input placeholder="composition" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size</FormLabel>
              <FormControl>
                <Input placeholder="size" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="established_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Established Date</FormLabel>
              <FormControl>
                <Input placeholder="established_date" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="created_by"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Created By</FormLabel>
              <FormControl>
                <Input placeholder="created_by" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="created_on"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Created On</FormLabel>
              <FormControl>
                <Input placeholder="created_on" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input placeholder="tags" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-[150px] justify-start"
          >
            {selectedStatus ? (
              <>
                <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                {selectedStatus.label}
              </>
            ) : (
              <>+ Set status</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {status.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(
                        status.find((priority) => priority.value === value) ||
                          null
                      )
                      setOpen(false)
                    }}
                  >
                    <span>{status.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
