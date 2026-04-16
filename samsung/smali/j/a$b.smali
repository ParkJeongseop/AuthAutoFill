.class public final Lj/a$b;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Lj/a$a;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lj/a;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "b"
.end annotation


# instance fields
.field private final a:[Lj/a$c;


# direct methods
.method public constructor <init>([Lj/a$c;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lj/a$b;->a:[Lj/a$c;

    return-void
.end method


# virtual methods
.method public a()[Lj/a$c;
    .locals 1

    iget-object v0, p0, Lj/a$b;->a:[Lj/a$c;

    return-object v0
.end method
