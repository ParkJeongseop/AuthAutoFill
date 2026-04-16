.class Lk/g$b;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Lk/g$c;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lk/g;->e(Lj/a$b;I)Lj/a$c;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lk/g$c<",
        "Lj/a$c;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic a:Lk/g;


# direct methods
.method constructor <init>(Lk/g;)V
    .locals 0

    iput-object p1, p0, Lk/g$b;->a:Lk/g;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic a(Ljava/lang/Object;)I
    .locals 0

    check-cast p1, Lj/a$c;

    invoke-virtual {p0, p1}, Lk/g$b;->c(Lj/a$c;)I

    move-result p1

    return p1
.end method

.method public bridge synthetic b(Ljava/lang/Object;)Z
    .locals 0

    check-cast p1, Lj/a$c;

    invoke-virtual {p0, p1}, Lk/g$b;->d(Lj/a$c;)Z

    move-result p1

    return p1
.end method

.method public c(Lj/a$c;)I
    .locals 0

    invoke-virtual {p1}, Lj/a$c;->e()I

    move-result p1

    return p1
.end method

.method public d(Lj/a$c;)Z
    .locals 0

    invoke-virtual {p1}, Lj/a$c;->f()Z

    move-result p1

    return p1
.end method
