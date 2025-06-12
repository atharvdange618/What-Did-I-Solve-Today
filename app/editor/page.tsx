"use client";

import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

// Zod schema
const formSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  summary: z.string().min(1),
  content: z.string().min(1),
  tags: z.string().optional(),
  category: z.string().optional(),
  date: z.string(), // HTML date input is string
  isPublished: z.boolean(),
  codeSnippets: z
    .array(
      z.object({
        description: z.string().optional(),
        code: z.string().optional(),
      })
    )
    .optional(),
});

type BlogFormValues = z.infer<typeof formSchema>;

const BlogEditor = () => {
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      summary: "",
      content: "",
      tags: "",
      category: "",
      date: new Date().toISOString().slice(0, 10),
      isPublished: true,
      codeSnippets: [],
    },
  });

  const { control, setValue, watch } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "codeSnippets",
  });

  const title = watch("title");

  // Auto-generate slug from title
  useEffect(() => {
    setValue("slug", title.toLowerCase().trim().replace(/\s+/g, "-"));
  }, [title, setValue]);

  const onSubmit = (data: BlogFormValues) => {
    const payload = {
      ...data,
      tags: data.tags
        ?.split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };
    console.log(payload); // replace with fetch
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl mx-auto p-6"
      >
        {/* Title */}
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Post title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Slug */}
        <FormField
          control={control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="auto-generated-slug" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Summary */}
        <FormField
          control={control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea rows={3} placeholder="Post summary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content */}
        <FormField
          control={control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Markdown Content</FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  placeholder="Write markdown here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tags */}
        <FormField
          control={control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input placeholder="e.g. react, nextjs, tailwind" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="e.g. web-dev" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date */}
        <FormField
          control={control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Publish Toggle */}
        <FormField
          control={control}
          name="isPublished"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between">
              <FormLabel>Published</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Code Snippets */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Code Snippets</h3>
            <Button
              type="button"
              variant="default"
              onClick={() => append({ description: "", code: "" })}
            >
              + Add Snippet
            </Button>
          </div>
          <Separator />
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid gap-2 border rounded-md p-4 relative"
            >
              <FormField
                control={control}
                name={`codeSnippets.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Snippet description" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`codeSnippets.${index}.code`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Your code here..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="default"
                className="absolute top-2 right-2"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Submit Post
        </Button>
      </form>
    </Form>
  );
};

export default BlogEditor;
