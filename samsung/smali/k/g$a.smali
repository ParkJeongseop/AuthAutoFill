.class Lk/g$a;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Lk/g$c;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lk/g;->g([Ln/b$f;I)Ln/b$f;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lk/g$c<",
        "Ln/b$f;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic a:Lk/g;


# direct methods
.method constructor <init>(Lk/g;)V
    .locals 0

    iput-object p1, p0, Lk/g$a;->a:Lk/g;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic a(Ljava/lang/Object;)I
    .locals 0

    check-cast p1, Ln/b$f;

    invoke-virtual {p0, p1}, Lk/g$a;->c(Ln/b$f;)I

    move-result p1

    return p1
.end method

.method public bridge synthetic b(Ljava/lang/Object;)Z
    .locals 0

    check-cast p1, Ln/b$f;

    invoke-virtual {p0, p1}, Lk/g$a;->d(Ln/b$f;)Z

    move-result p1

    return p1
.end method

.method public c(Ln/b$f;)I
    .locals 0

    invoke-virtual {p1}, Ln/b$f;->d()I

    move-result p1

    return p1
.end method

.method public d(Ln/b$f;)Z
    .locals 0

    invoke-virtual {p1}, Ln/b$f;->e()Z

    move-result p1

    return p1
.end method
