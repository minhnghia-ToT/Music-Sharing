import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Start seeding...");

  // 1. tạo role USER
  await prisma.role.upsert({
    where: { code: "USER" },
    update: {},
    create: {
      code: "USER",
      name: "User"
    }
  });

  // 2. tạo user demo
  const user = await prisma.user.upsert({
    where: { email: "demo@music.com" },
    update: {},
    create: {
      email: "demo@music.com",
      password: "123456", // TODO: hash bằng bcrypt
      displayName: "Demo User",
      roles: {
        create: { roleCode: "USER" }
      }
    }
  });

  // 3. tạo artist gắn user
  const artist = await prisma.artist.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      stageName: "Demo Artist"
    }
  });

  // 4. tạo asset demo (audio & cover)
  const audio = await prisma.asset.create({
    data: {
      kind: "audio",
      storageUrl: "/uploads/demo.mp3",
      mimeType: "audio/mpeg",
      durationMs: 180000
    }
  });

  const cover = await prisma.asset.create({
    data: {
      kind: "image",
      storageUrl: "/uploads/demo.jpg",
      mimeType: "image/jpeg",
      width: 500,
      height: 500
    }
  });

  // 5. tạo track demo
  await prisma.track.create({
    data: {
      artistId: artist.id,
      title: "My First Track",
      description: "Đây là bản demo đầu tiên",
      status: "PUBLISHED",
      audioAssetId: audio.id,
      coverAssetId: cover.id
    }
  });

  console.log("✅ Seed done");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
