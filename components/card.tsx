import { Post } from '@/lib/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProjectCard({ post }: { post: Post }) {
  return (
    <article className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={`https://picsum.photos/id/${post.id}/300/300`}
          alt=""
          width={300}
          height={300}
          className="max-w-100 object-contain"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{post.title}</h2>
        <div className="card-actions">
          <Link className="btn" href={`projects/${post.id}`}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
